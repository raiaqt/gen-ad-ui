export interface Properties {
  [key: string]: {
    type?: string;
    description?: string;
    enum?: (string | number)[];
    properties?: Properties;
  };
}

export interface Definition {
  type: string;
  properties: Properties;
}

export interface Data {
  [key: string]: string | number | Data | null;
}
