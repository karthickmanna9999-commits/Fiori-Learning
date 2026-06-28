sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
],
function (Controller, MessageToast,MessageBox) {
    "use strict";

    return Controller.extend("salesorderapp.ui.controller.DisplayProduct", {
        onInit: function () {
            
            var oSelectedProductModel = this.getOwnerComponent().getModel("SelectedProductModel");
            var oSelectedProductData = oSelectedProductModel.getData();
            debugger;
            this.getOwnerComponent().getRouter().getRoute("RouteProductDisplay").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            var oArgs = oEvent.getParameter("arguments");
            var sProductId = oArgs.ProductId;
            // Do something with the product ID
        },

        onUpdateProduct: function () {
            var oSelectedProductModel = this.getOwnerComponent().getModel("SelectedProductModel");
            var oSelectedProductData = oSelectedProductModel.getData();
            if(oSelectedProductData.Product_Text==""){
                MessageBox.warning("Product Name cannot be empty.");
                MessageToast.show("Product Name cannot be empty.");
                return;
            }
        },
        onMaximumCapacityChange: function (oEvent) {
                var oInput = oEvent.getSource();
                var sValue = oInput.getValue();
                var iMaxLength = 7; // Set the maximum length to 7 characters
                if (sValue.length > iMaxLength) {
                    MessageBox.warning("Maximum Capacity cannot exceed " + iMaxLength + " characters.");
                    oInput.setValue(sValue.substring(0, iMaxLength)); // Trim the value to the maximum length
                }
        },

        onMaximumCapacityLiveChange: function (oEvent) {
            var oInput = oEvent.getSource();
            var sValue = oInput.getValue();
            var iMaxLength = 7; // Set the maximum length to 7 characters
            if (sValue.length > iMaxLength) {
                MessageBox.warning("Maximum Capacity cannot exceed " + iMaxLength + " characters.");
                oInput.setValue(sValue.substring(0, iMaxLength)); // Trim the value to the maximum length
            }
            else{
                MessageToast.show("Maximum Capacity is within the limit of " + iMaxLength + " characters.");
            }
        }

    });
});
