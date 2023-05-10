export enum PermissionEnum {
    
    ADD_APP = 'addapp',
    VIEW_APP = 'viewapp',
    VIEW_ALL_APPS = 'viewallapps',
    UPDATE_APP = 'updateapp',
    UPDATE_ALL_APPS = 'updateallapps',
    DELETE_APP = 'deleteapp',
    DELETE_ALL_APPS = 'deleteallapps',
    VIEW_APP_USERS = 'viewappusers',
    VIEW_ALL_APP_USERS = 'viewallappusers',
    ASSIGN_APP_USERS = 'assignappusers',
    ASSIGN_ALL_APP_USERS = 'assignallappusers',
    REVOKE_APP_USERS = 'revokeappusers',
    REVOKE_ALL_APP_USERS = 'revokeallappusers',
    // OPS = operations
    ADD_APP_OPS = 'addappops',
    ADD_ALL_APP_OPS = 'addallappops',
    VIEW_APP_OPS = 'viewappops',
    VIEW_ALL_APP_OPS = 'viewallappops',
    UPDATE_APP_OPS = 'updateappops',
    UPDATE_ALL_APP_OPS = 'updateallappops',
    DELETE_APP_OPS = 'deleteappops',
    DELETE_ALL_APP_OPS = 'deleteallappops',

    // ProjScope
    REVOKE_PROJECT_USERS = 'revokeprojectusers',
    //TenantScope
    DELETE_USER = 'deletetenantuser',
}

export enum PermissionType {
    GLOBAL = "Global",
    REGULAR = "Regular"
}

export enum PermissionScope {
    TENANT = "Tenant",
    PROJECT = "Project",
    APPLICATION = "Application"
}

export enum PermissionRole {
    OWNER = "Owner",
    CONRIBUTOR = "Contributor",
    READER = "Reader"
}