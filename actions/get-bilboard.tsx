import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const getBillboard = async (id: number): Promise<Billboard> => {
  const URL = "https://api.example.com/billboard";
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

export default getBillboard;
