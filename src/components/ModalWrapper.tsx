import { RiCloseFill } from "react-icons/ri";

type ModalWrapperProps = {
	children: React.ReactNode;
	title?: string;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalWrapper = ({
	children,
	title,
	isOpen,
	setIsOpen,
}: ModalWrapperProps) => {
	const handlePropagation = (e: any) => {
		e.stopPropagation();
	};

	return (
		<div
			className={`fixed w-full max-w-[800px] h-screen top-0 left-[50%] translate-x-[-50%] z-10 transition duration-300 ${
				isOpen ? "bg-[#0000009d]" : "pointer-events-none"
			}`}
			onClick={() => setIsOpen(false)}>
			<div
				className={`absolute w-full bg-neutral-950 rounded-t-3xl bottom-0 left-0 transition duration-[0.4s] ${
					isOpen ? " translate-y-0" : "translate-y-[100%]"
				}`}
				onClick={(e) => handlePropagation(e)}>
				<div
					className={`p-4 flex items-center rounded-t-3xl border-b-2 border-neutral-900 ${
						title ? "justify-between" : "justify-end"
					}`}>
					{title && (
						<p className="text-[18px] font-semibold text-neutral-400">
							{title}
						</p>
					)}
					<button
						className="text-[30px] p-1 rounded-full hover:bg-neutral-900 text-antique-gold transition"
						onClick={() => setIsOpen(false)}>
						<RiCloseFill />
					</button>
				</div>
				<div className="max-h-[80vh] overflow-auto hide-scroll">{children}</div>
			</div>
		</div>
	);
};

export default ModalWrapper;
