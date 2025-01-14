-- Valid Queries (These should not display any errors)
ALTER TABLE test;
CREATE TABLE person;
DROP TABLE test;
TRUNCATE TABLE person;
DELETE
FROM 
PERSON  
WHERE something;

-- [sql-lint: unmatched-parentheses]
SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE ')';
-- [sql-lint: database-not-found]
USE test;
-- [sql-lint: missing-where]
DELETE  FROM    person;
-- [sql-lint: invalid-drop-option]
DROP thing l;
-- [sql-lint: invalid-create-option]
CREATE test person;
-- [sql-lint: invalid-truncate-option]
TRUNCATE something g;
-- [sql-lint: invalid-alter-option]
ALTER mlady TEST;
-- [sql-lint: odd-code-point]
SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE '�';


-- [ER_NO_DB_ERROR]
SELECT  * FROM    PERSON  WHERE age > 5 ;
-- [ER_PARSE_ERROR]
UPDATE symfony.gig SET id = 4;
-- [ER_NO_SUCH_TABLE]
select * FROM symfony.dont_exist;
