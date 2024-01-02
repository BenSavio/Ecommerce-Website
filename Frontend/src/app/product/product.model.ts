// product.model.ts

export interface Product {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string,
    price: number;
}

export interface Order {
    _id: string,
    userId: string,
    address: object,
    title: string,
    price: number,
    image: string;
    amount: number,
    status: string
}