import { Card, Table } from "antd";
import { COLUMNS } from "../constants/productsTabelCol.tsx";
import { TProduct } from "../types/index.ts";

type Props = {
  data?: TProduct[];
  loading?: boolean;
  error?: string;
};

const ProductsTable = ({ data, loading }: Props) => {
  return (
    <Card style={{ width: "100%" }}>
      <Table
        columns={COLUMNS}
        dataSource={data}
        loading={loading}
        title={() => "Products"}
      />
    </Card>
  );
};

export default ProductsTable;
