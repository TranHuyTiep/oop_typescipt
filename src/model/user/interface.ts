import mongoose = require("mongoose");

export interface user extends mongoose.Document {
  power: string;
  amountPeopleSaved: number;
  name: string;
}
