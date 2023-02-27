import { useSnapCarousel } from "react-snap-carousel";
import "./moCarousel.css";

type CarouselProps = {
	height?: number;
	width?: number;
	items: any[];
};

function MoCarousel({ height, width, items }: CarouselProps) {
	const { scrollRef, pages, activePageIndex, next, prev, goTo } =
		useSnapCarousel();

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		if (activePageIndex + 1 === items.length) {
	// 			goTo(0);
	// 		} else {
	// 			next();
	// 			console.log(activePageIndex);
	// 		}
	// 	}, 2000);

	// 	return () => clearInterval(interval);
	// }, []);

	return (
		<>
			<div
				ref={scrollRef}
				style={{
					display: "flex",
					width: width,
					height,
					overflowX: "auto",
					scrollSnapType: "x mandatory",
				}}
				className="hide-scroll"
			>
				{items.map((e, i) => (
					<div>
						<div
							className="carousel-item glass"
							style={{
								backgroundImage: `url(${e["images"][0]})`,
								border: `1px solid ${activePageIndex == i ? "red" : "white"}`,
							}}
						>
							{e["name"]}
						</div>
					</div>
				))}
			</div>

			{/* <button onClick={() => prev()}>Prev</button>
			<button onClick={() => next()}>Next</button> */}

			{/* <div>
				{activePageIndex + 1} / {pages.length}
			</div>


			<ol style={{ display: "flex" }}>
				{pages.map((_, i) => (
					<li key={i}>
						<button
							style={i === activePageIndex ? { opacity: 0.5 } : {}}
							onClick={() => goTo(i)}
						>
							{i + 1}
						</button>
					</li>
				))}
			</ol> */}
		</>
	);
}

export default MoCarousel;
