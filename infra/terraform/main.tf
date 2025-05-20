provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "main" {
  name     = "ai-analytics-rg"
  location = "East US"
}

resource "azurerm_storage_account" "adls" {
  name                     = "aianalyticsadls${random_id.suffix.hex}"
  resource_group_name      = azurerm_resource_group.main.name
  location                 = azurerm_resource_group.main.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  is_hns_enabled           = true
}

resource "random_id" "suffix" {
  byte_length = 2
}