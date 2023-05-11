
import { RequestContext } from "@medibloc/nestjs-request-context";
import { Injectable } from "@nestjs/common";
import { UserContext } from "./user";

@Injectable()
export class UserContextProvider extends RequestContext {
    private _user: UserContext;
    constructor() {
        super();
    }

    setUser(user: UserContext) {
        this._user = user;
    }

    setUserContext(user: UserContext) {
        const ctx: UserContextProvider = RequestContext.get();
        ctx.setUser(user);
    }

    get user(): UserContext {
        const ctx: UserContextProvider = RequestContext.get();
        return ctx._user;
    }

    get email(): string {
        const ctx: UserContextProvider = RequestContext.get();
        console.log(ctx)
        return ctx._user.email.toLowerCase();
    }

    get tenantRoles() {
        const ctx: UserContextProvider = RequestContext.get();
        return ctx._user.tenant.roles;
    }

    get tenantPermissions(): string[] {
        const ctx: UserContextProvider = RequestContext.get();
        let permissions = new Set<string>();
        ctx._user.tenant.roles.forEach((role) => {
            role.permissions.forEach((perm) => {
                permissions.add(perm.name);
            });
        });
        return [...permissions];
    }

    get projRoles() {
        const ctx: UserContextProvider = RequestContext.get();
        return ctx._user.projects;
    }
}