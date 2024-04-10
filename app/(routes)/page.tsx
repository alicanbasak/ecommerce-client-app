import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import billboards from "@/mock-data/billboards";
import ProductList from "@/components/product-list";
import products from "@/mock-data/product-list";

export const revalidate = 0;

const HomePage = () => {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards[0]} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Yeni Ürünler" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
