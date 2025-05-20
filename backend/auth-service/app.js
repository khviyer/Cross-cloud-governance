const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
const { checkRole } = require('./rbac');
const auditLogger = require('./audit');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use(session({ secret: 'REPLACE_ME', resave: false, saveUninitialized: true }));

// OAuth2 strategy setup (stub, replace with Azure AD config)
passport.use(new OAuth2Strategy({
    authorizationURL: 'https://login.microsoftonline.com/YOUR_TENANT_ID/oauth2/v2.0/authorize',
    tokenURL: 'https://login.microsoftonline.com/YOUR_TENANT_ID/oauth2/v2.0/token',
    clientID: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    callbackURL: '/auth/callback'
  },
  (accessToken, refreshToken, profile, cb) => {
    // Map profile to user, roles, etc.
    return cb(null, { profile, accessToken });
  }
));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Auth routes
app.get('/auth/login', passport.authenticate('oauth2'));
app.get('/auth/callback', passport.authenticate('oauth2', { failureRedirect: '/' }),
  (req, res) => {
    auditLogger.log('login', req.user.profile);
    res.redirect('/dashboard');
  }
);

// RBAC-protected route example
app.get('/admin', checkRole('admin'), (req, res) => {
  res.json({ message: 'Welcome, admin!' });
});

app.get('/healthz', (req, res) => res.json({ status: 'ok' }));

app.listen(4000, () => console.log('Auth service running on port 4000'));
