// Simple RBAC middleware (expand as needed)
function checkRole(role) {
  return (req, res, next) => {
    const userRoles = req.user && req.user.profile && req.user.profile.roles || [];
    if (userRoles.includes(role)) {
      return next();
    }
    return res.status(403).json({ error: 'Forbidden' });
  };
}

module.exports = { checkRole };