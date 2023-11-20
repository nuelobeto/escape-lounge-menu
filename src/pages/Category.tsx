import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SubCategoryCard from "../components/SubCategoryCard";
import useGlobalStates from "../store/useGlobalStates";
import useMenu from "../store/useMenu";

const Category = () => {
  const { menu } = useMenu((state) => state);
  const { openSearchBar, searchQuery } = useGlobalStates((state) => state);
  const query = searchQuery.toLowerCase();
  const params = useParams();
  const slug = params.slug;
  const category = menu.filter((item) => item.item_category === slug);
  const subCategoryHeadings = [
    ...new Set(category.map((item) => item.item_subcategory)),
  ];
  const subCategories = subCategoryHeadings.map((x) =>
    category.filter((y) => y.item_subcategory === x)
  );
  const filtered = subCategories
    .map((subcat) =>
      subcat.filter(
        (item) =>
          (item.item_subcategory &&
            item.item_subcategory.toLowerCase().includes(query)) ||
          (item.item_name && item.item_name.toLowerCase().includes(query)) ||
          (item.item_description &&
            item.item_description.toLowerCase().includes(query))
      )
    )
    .filter((subArray) => subArray.length > 0);

  return (
    <>
      <Header subCategories={subCategoryHeadings} />
      <main
        className={`${
          !openSearchBar ? "h-[calc(100%-171px)]" : "h-[calc(100%-248px)]"
        } overflow-auto hide-scroll`}
      >
        <section>
          <div className="pt-3 pb-6 px-6 flex flex-col gap-6">
            {filtered.map((subCategory, index) => (
              <SubCategoryCard key={index} subCategory={subCategory} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Category;
