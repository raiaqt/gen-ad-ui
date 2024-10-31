import { Data, Properties } from "../../types/swagger";
import { formatISODate, isISODateString } from "../../utils/date";
import { Header, Row } from "./types";

export const getHeadersFromData = (data: Data[]): Header[] =>
  data
    .reduce((acc, curr) => {
      const a = [...acc];

      Object.keys(curr).forEach((key) => {
        if (!a.includes(key)) {
          a.push(key);
        }
      });
      return a;
    }, [] as string[])
    .map((header) => ({ label: header, key: header }));

export const getHeadersFromProperties = (properties: Properties): Header[] =>
  Object.entries(properties).map(([key, property]) => ({
    label: property.description ?? key,
    key,
  }));

export const getHeaders = (data: Data[], properties?: Properties): Header[] =>
  properties ? getHeadersFromProperties(properties) : getHeadersFromData(data);

export const getRows = (data: Data[], headers: Header[]): Row[] => {
  const firstKey = headers[0]?.key ?? ("id" as keyof Data);

  return data.map((row) => ({
    key: row[firstKey] as string,
    data: headers.map((header) => {
      const value = row[header.key];
      if (value === null || value === undefined || value === "undefined") {
        return "-";
      }
      if (typeof value === "number") {
        return value.toString();
      }
      if (typeof value === "object") {
        return Object.values(value).join(" ");
      }
      if (isISODateString(value)) {
        return formatISODate(value);
      }

      return value;
    }),
  }));
};
