import { useEffect, useRef, useState } from "react";
import MenuModal from "./MenuModal";
import { MenuItemT } from "../types/types";
import useGlobalStates from "../store/useGlobalStates";

type SubCategoryCardProps = {
	subCategory: MenuItemT[];
};

const SubCategoryCard = ({ subCategory }: SubCategoryCardProps) => {
	const { setActiveCategory } = useGlobalStates((state) => state);
	const heading = [
		...new Set(subCategory.map((item) => item.item_subcategory)),
	];
	const [openMenuModal, setOpenMenuModal] = useState(false);
	const [item, setItem] = useState<MenuItemT | null>(null);
	const elementRef = useRef<HTMLDivElement | null>(null);

	const handleSelectItem = (item: MenuItemT) => {
		setOpenMenuModal(true);
		setItem(item);
	};

	const handleIntersection: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (elementRef.current) {
					const id = elementRef.current?.getAttribute("id");
					if (id) {
						setActiveCategory(id);
					}
				}
			}
		});
	};

	useEffect(() => {
		const options: IntersectionObserverInit = {
			root: null,
			rootMargin: "0px",
			threshold: 0.8,
		};

		const observer = new IntersectionObserver(handleIntersection, options);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<>
			<div
				id={heading[0]}
				className="sub-category flex flex-col gap-6 cursor-pointer"
				ref={elementRef}>
				<h2 className="text-center p-1 rounded-lg bg-antique-gold/10 text-[20px] font-bold text-antique-gold">
					{heading[0].toUpperCase()}
				</h2>
				{subCategory.map((item, index) => (
					<div
						key={index}
						className="flex justify-between border-b border-neutral-600 pb-4"
						onClick={() => handleSelectItem(item)}>
						<div className="flex flex-col gap-1">
							<h3 className="font-bold text-neutral-300">
								{item.item_name.toUpperCase()}
							</h3>
							<p className="text-[14px] text-neutral-400">
								{item.item_description}
							</p>
						</div>
						<p className="text-antique-gold text-[15px]">
							<span className="text-[12px]">₦</span>
							{item.item_amount}
						</p>
					</div>
				))}
			</div>

			<MenuModal
				openMenuModal={openMenuModal}
				setOpenMenuModal={setOpenMenuModal}
				item={item}
			/>
		</>
	);
};

export default SubCategoryCard;
