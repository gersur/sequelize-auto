import { mssqlOptions } from './mssql';
import { mysqlOptions } from './mysql';
import { postgresOptions } from './postgres';
import { sqliteOptions } from './sqlite';
import { DialectOptions } from './dialect-options';
import { Dialect } from 'sequelize';

const undefinedOptions: DialectOptions = {
  name: '',
  hasSchema: false,
  getForeignKeysQuery: function (tableName: string, schemaName: string): string {
    throw new Error('Function not implemented.');
  },
  countTriggerQuery: function (tableName: string, schemaName: string): string {
    throw new Error('Function not implemented.');
  },
  isPrimaryKey: function (record: any): boolean {
    throw new Error('Function not implemented.');
  },
  isSerialKey: function (record: any): boolean {
    throw new Error('Function not implemented.');
  },
  showViewsQuery: function (schemaName?: string | undefined): string {
    throw new Error('Function not implemented.');
  },
};

export const dialects: { [name in Dialect]: DialectOptions } = {
  mssql: mssqlOptions,
  mysql: mysqlOptions,
  mariadb: mysqlOptions,
  postgres: postgresOptions,
  sqlite: sqliteOptions,
  db2: undefinedOptions,
  snowflake: undefinedOptions,
  oracle: undefinedOptions,
};
