"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210910005051 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210910005051 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "user" add column "email" text not null;');
        this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
    }
}
exports.Migration20210910005051 = Migration20210910005051;
//# sourceMappingURL=Migration20210910005051.js.map