import { Query } from "../../reader/query";
import { ILexer } from "../interface";
import { cleanUnquotedIdentifier } from "../lexer";
import { Types } from "../tokens";
import { Keyword } from "../../syntax/keywords";
import { Token } from "../token";

class Alter implements ILexer {
  public options: string[] = [
    "online",
    "offline",
    "ignore",
    "database",
    "event",
    "function",
    "procedure",
    "server",
    "table",
    "tablespace",
    "view"
  ];

  public tokenise(query: Query): Query {
    let lastToken = "";

    query.lines.forEach(line => {
      line.content.split(" ").forEach(word => {
        let item = word.toLowerCase().trim();
        if (item === Keyword.Alter) {
          line.tokens.push(new Token(Types.Keyword, item));
        } else if (lastToken === Keyword.Alter) {
          item = cleanUnquotedIdentifier(item);

          if (item.length > 0) {
            line.tokens.push(
              new Token(Types.Option, cleanUnquotedIdentifier(item))
            );
          }
        }
        lastToken = item;
      });
    });

    return query;
  }
}

export { Alter };
