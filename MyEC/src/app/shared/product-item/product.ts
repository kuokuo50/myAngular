export class Product {
    // 類別
    type: string;

    // 圖檔
    img: string;

    // 產品名稱
    name: string;

    // 產品價格
    price: number;

    constructor(type: string, img: string, name: string, price: number) {
        this.type = type;
        this.img = img;
        this.name = name;
        this.price = price;
    }
}
