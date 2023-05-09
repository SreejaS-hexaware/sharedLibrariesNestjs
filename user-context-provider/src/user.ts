import { PermissionScope, PermissionType } from "./permission.enum";

export class Permission {
    _id: string;
    name: string;
}
export class Role {
    _id: string;
    permissions: Permission[];
    name: string;
    description: string;
    tenant: string;
    createddate: Date;
    createdby: string;
}

export interface TenantRole {
    _id: string,
    roles: Role[]
}

export interface AppRoles {
    [appId: string]: {
        roles: string[]
        permissions?: string[]
    }
}

export interface ProjRolesValue {
    roles: string[];
    applications?: AppRoles;
}

export interface ProjRoles {
    [projId: string]: ProjRolesValue;
}
export class User {
    _id: string;
    roles: Role[];
    name: string;
    firstname: string;
    secondname: string;
    lastname: string;
    workphone: string;
    email: string;
    department: string;
    superadmin: boolean;
    channelpartneradmin: boolean;
    location: string;
    createddate: Date;
    createdby: string;
    tenant: string;
    isactive: boolean;
    shortUuid: string;
    mraUsed: string[];
    effortsSaved: number;
    loginCount: number;
    lastLoginTime: Date;
}

export type UserWithoutTenantDetails = Omit<User, 'tenant' | 'roles'>;

export interface UserContext extends UserWithoutTenantDetails {
    tenant: TenantRole,
    projects: ProjRoles,
    permissionGranted: {
        permissionScope: PermissionScope
        permissionType: PermissionType
    }
}