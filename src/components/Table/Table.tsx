import { Data, Properties } from "../../types/swagger";
import { getHeaders, getRows } from "./utils";
import "./Table.css";

interface TableProps {
  data: Data[];
  properties?: Properties;
}

const Table: React.FC<TableProps> = ({ data, properties }) => {
  const headers = getHeaders(data, properties);
  const rows = getRows(data, headers);

  return (
    <div className="table">
      <table>
        <tr>
          {headers.map((header) => (
            <th key={header.key}>{header.label}</th>
          ))}
        </tr>

        {rows.map((row) => (
          <tr key={row.key}>
            {row.data.map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
