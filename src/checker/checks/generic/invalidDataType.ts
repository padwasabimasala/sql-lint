/**
 * Triggered when you try and UPDATE/INSERT a value
 * that does not match the data type for that column.
 */

import { Query } from "../../../reader/query";
import { CheckerResult } from "../../checkerResult";
import { IChecker } from "../../interface";
import { Check } from "../check";

class InvalidDataType extends Check implements IChecker {
  public message: string = "Invalid data type '%s' must be type '%s'";

  public check(query: Query): CheckerResult {
    this.getName();
    console.log('test');
    return new CheckerResult(0, "");
  }
}

export { InvalidDataType };
