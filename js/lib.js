/*viet ma javascript*/
//khai bao 1 doi tuong luu thong tin san pham
const products = [
    {
        nameProduct: "nam việt quốc",
        price: "45.000đ",
        description: "đây là một loại nước chuyền thống tại cuba",
        image: "../assets/images/nuoc1.jpg",
        link: "chitiet.html"
    },
    {
        nameProduct: "cacao đầm",
        price: "45.000đ",
        description: "một loại nước uống giải khác vào mùa hè",
        image: "../assets/nuoc2.jpg", 
        link: "chitiet.html"
    },
    {
        nameProduct: "chó cỏ",
        price: "800",
        description: "Đây là một loại hoa hồng nổi tiếng ở nước Pháp được nhập khẩu",
        image: "../assets/nuoc3.jpg",
        link: "chitiet.html"
    },
    {
        nameProduct: "chó cỏ",
        price: "800",
        description: "Đây là một loại hoa hồng nổi tiếng ở nước Pháp được nhập khẩu",
        image: "../assets/nuoc4.jpg",
        link: "chitiet.html"
    },
];

function creatItem(obj)
{
    // Xác định khung chứa product-list
    const listProducts = document.getElementById("product-list");

    // Tạo 1 container có class = item
    const item = document.createElement("div");
    item.setAttribute("class", "item");

    // Tạo khung chứa hình ảnh
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "image");

    // Tạo ảnh
    const img = document.createElement("img");
    img.setAttribute("src", obj.image);
    img.setAttribute("alt", obj.nameProduct);
    img.setAttribute("style", "width:100%; max-width:150px");

    // Đưa ảnh vào khung chứa ảnh
    containerImage.appendChild(img);

    // Tạo khung chứa thông tin sản phẩm
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "info");

    // Tạo tên sản phẩm
    const nameProduct = document.createElement("p");
    nameProduct.innerHTML = obj.nameProduct;

    // Tạo giá sản phẩm
    const price = document.createElement("p");
    price.innerHTML = obj.price;

    // Tạo mô tả sản phẩm
    const description = document.createElement("p");
    description.innerHTML = obj.description;

    // Tạo liên kết
    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", obj.link);

    // Đưa thông tin vào containerInfo
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);

    // Đưa image và info vào item
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    // Đưa item vào danh sách sản phẩm
    listProducts.appendChild(item);
}

window.onload = function ()
{
    products.forEach(product => {
        creatItem(product);
    });
};