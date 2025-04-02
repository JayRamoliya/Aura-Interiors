import React from "react";
import Product from "./Product";
import products from "../products";

const TrendingProducts = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Trending Products</h2>
                </div>
                <div className="relative overflow-hidden">
                    <div id="trending-products" className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">

                        <div className="container mx-auto p-4">
                            <h2 className="text-2xl font-bold mb-4">Products</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {products.map((product) => (
                                    <Product
                                        key={product.id}
                                        image={product.image}
                                        title={product.name}
                                        price={product.price}
                                        link={product.link}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* <Product
              image="https://public.readdy.ai/ai/img_res/f1abce78fbacb02e81d3dbd963d9b2cd.jpg"
              title="Modern Comfort Armchair"
              description="Scandinavian Design"
              price="$349.99"
              rating={4.5}
              label="New"
              labelType="new"
            />
            <Product
              image="https://public.readdy.ai/ai/img_res/69fb77b370ddd22c1e71b232dded5b2a.jpg"
              title="Brass Accent Table Lamp"
              description="Contemporary Design"
              price="$129.99"
              oldPrice="$149.99"
              rating={4.0}
              label="-15%"
              labelType="discount"
            />
            <Product
              image="https://public.readdy.ai/ai/img_res/77c34cbd1a0059da09fce488590c7e69.jpg"
              title="Minimalist Ceramic Vase"
              description="Handcrafted"
              price="$79.99"
              rating={5.0}
              label="Bestseller"
              labelType="bestseller"
            />
            <Product
              image="https://public.readdy.ai/ai/img_res/f0b5df59e6525ad7f2063d975c43f896.jpg"
              title="Wool Geometric Throw"
              description="100% Merino Wool"
              price="$119.99"
              rating={4.5}
              label="Bestseller"
              labelType="bestseller"
            />
            <Product
              image="https://public.readdy.ai/ai/img_res/c1f641df1368538f08a33800fa407130.jpg"
              title="Abstract Gold Wall Art"
              description="Framed Canvas"
              price="$199.99"
              rating={4.0}
              label="New"
              labelType="new"
            /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;
