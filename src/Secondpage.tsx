import { useEffect, useState } from "react";
import axios from "axios";
import Third from "./Third";
import Third2 from "./Third2";
import Box from "@mui/material/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@mui/material";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataList: React.FC = () => {
  const [dataList, setDataList] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setDataList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h1>Data List</h1>
      <Box sx={{ height: "50vh", width: "100%", overflowY: "auto" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataList.map((data) => (
                <TableRow>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.title}</TableCell>
                  <TableCell>{data.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Third />
      <Third2 />
    </Container>
  );
};

export default DataList;
