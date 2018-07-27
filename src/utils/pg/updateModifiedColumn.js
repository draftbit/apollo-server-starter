const CREATE_UPDATE_MODIFIED_COLUMN_FUNCTION = `
  CREATE OR REPLACE FUNCTION update_modified_column()
  RETURNS TRIGGER AS $$
  BEGIN
    IF row(NEW.*) IS DISTINCT FROM row(OLD.*) THEN
        NEW.updated_at = now(); 
        RETURN NEW;
    ELSE
        RETURN OLD;
    END IF;
  END;
  $$ language 'plpgsql';
`

const DROP_UPDATE_MODIFIED_COLUMN_FUNCTION = `
  DROP FUNCTION IF EXISTS update_modified_column CASCADE;
`

function createTimestampAutoUpdateTrigger (tableName) {
  return `CREATE TRIGGER update_${tableName}_modtime BEFORE UPDATE ON ${tableName} FOR EACH ROW EXECUTE PROCEDURE update_modified_column();`
}

module.exports = {
  CREATE_UPDATE_MODIFIED_COLUMN_FUNCTION,
  DROP_UPDATE_MODIFIED_COLUMN_FUNCTION,
  createTimestampAutoUpdateTrigger
}
