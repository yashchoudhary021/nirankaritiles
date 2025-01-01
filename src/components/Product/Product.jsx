import "../Product/css/product.css";
const Product = () => {
    return (<>
        {/* <div className="burgur">
            <img className="burgur-img" src="/assets/contact/house.jpg" alt="house" />
        </div> */}
        <div className="container">
            <div className="row">

                <div class="lightbox" data-mdb-lightbox-init>
                    <div class="multi-carousel" data-mdb-multi-carousel-init>
                        <div class="multi-carousel-inner">
                            <div class="multi-carousel-item">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
                                    data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
                                    alt="Table Full of Spices"
                                    class="w-100"
                                />
                            </div>
                            <div class="multi-carousel-item">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
                                    data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp"
                                    alt="Winter Landscape"
                                    class="w-100"
                                />
                            </div>
                            <div class="multi-carousel-item">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
                                    data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
                                    alt="View of the City in the Mountains"
                                    class="w-100"
                                />
                            </div>
                            <div class="multi-carousel-item">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp"
                                    data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/4.webp"
                                    alt="Place Royale Bruxelles"
                                    class="w-100"
                                />
                            </div>
                        </div>
                        <button data-mdb-button-init
                            class="carousel-control-prev"
                            type="button"
                            tabindex="0"
                            data-mdb-slide="prev"
                        >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button data-mdb-button-init
                            class="carousel-control-next"
                            type="button"
                            tabindex="0"
                            data-mdb-slide="next"
                        >
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Product;