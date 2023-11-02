import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { MENU } from "../data/menu";
import SubCategoryCard from "../components/SubCategoryCard";
import useGlobalStates from "../store/useGlobalStates";

const Category = () => {
  const { openSearchBar, searchQuery } = useGlobalStates((state) => state);
  const query = searchQuery.toLowerCase();
  const params = useParams();
  const slug = params.slug;
  const category = MENU.filter((item) => item.category === slug);
  const subCategoryHeadings = [
    ...new Set(category.map((item) => item.subCategory)),
  ];
  const subCategories = subCategoryHeadings.map((x) =>
    category.filter((y) => y.subCategory === x)
  );
  const filtered = subCategories
    .map((subcat) =>
      subcat.filter(
        (item) =>
          item.subCategory.toLowerCase().includes(query) ||
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
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
