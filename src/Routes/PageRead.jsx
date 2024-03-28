import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBooks } from "../Utilities/LocalStorage";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const PageRead = () => {
  const PageRead = useLoaderData();
  const [readedbook, setreadedbook] = useState([]);

  useEffect(() => {
    const savedBooks = getReadBooks();
    if (PageRead.length > 0) {
      const readedBooks = PageRead.filter((book) =>
        savedBooks.includes(book.bookId)
      );
      setreadedbook(readedBooks);
    }
  }, [PageRead]);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="min-h-[calc(100vh-150px)] border my-5 rounded-3xl bg-[#13131308]">
      <ResponsiveContainer width="100%" height={450}>
        <BarChart
          data={readedbook.map((book) => ({
            name: book.bookName,
            totalPages: book.totalPages,
          }))}
          margin={{
            top: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="text-[11px]" />
          <YAxis />
          <Tooltip></Tooltip>
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {readedbook.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

PageRead.propTypes = {
  fill: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
export default PageRead;
