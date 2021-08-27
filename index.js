var express = require("express");
var serverManager = require("servermanager");
var serverManagerAPI = require("server-manager-api");
var path = require("path");
serverManager.startServer();
serverManagerAPI.instance.APP.use("/", express.static(path.resolve(__dirname, './public')));
new serverManager.InitProcess().init();