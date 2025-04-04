"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importStar(require("../utils/sequelize"));
const members_model_1 = __importDefault(require("./members.model"));
class MessageModel extends sequelize_1.Model {
}
MessageModel.init({
    id: {
        type: sequelize_1.DataTypes.STRING(255),
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    message: {
        type: sequelize_1.DataTypes.TEXT("long"),
        allowNull: true,
    },
    origin: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
        field: "origin",
    },
    subject: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
        field: "subject",
    },
    observation: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
        defaultValue: "0",
        field: "observation",
    },
    number: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null,
    },
    log: {
        type: sequelize_1.DataTypes.TEXT("long"),
        allowNull: true,
        field: "log",
    },
    status: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        field: "etat",
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize_1.DataTypes.NOW,
        field: "updateAt",
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize_1.DataTypes.NOW,
        field: "createAt",
    },
}, {
    sequelize: sequelize_2.default,
    tableName: "messages",
    timestamps: true,
    collate: sequelize_2.COLLATE,
    charset: sequelize_2.CHARSET,
});
MessageModel.belongsTo(members_model_1.default, { as: "member", foreignKey: "memberId" });
// MembersModel.belongsTo(UsersModel, {as: 'user', foreignKey: 'userCreate'})
exports.default = MessageModel;
