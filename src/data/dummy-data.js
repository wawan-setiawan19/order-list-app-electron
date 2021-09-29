const data = {
    users: [
        {
            id: 1,
            username: "admin",
            password: "admin",
        },
    ],
    orders: [
        {
            id: 1,
            status: "Dikirim",
            detail: {
                food: {
                    foodName: "Nasi Goreng",
                    picture: "nasi-goreng.jpg",
                },
                qty: 1,
                Modifier: "Extra Ayam",
                Notes: "-",
            },
            time:'14.00'
        },
        {
            id: 2,
            status: "Dikirim",
            detail: {
                room:'129',
                food: {
                    foodName: "Ayam Bakar",
                    picture: "ayam-bakar.jpg",
                },
                qty: 1,
                Modifier: "Pedas, Hangat",
                Notes: "-",
            },
            time:'15.10'
        },
        {
            id: 3,
            status: "Dikirim",
            detail: {
                room:'231',
                food: {
                    foodName: "Sop",
                    picture: "soup.jpg",
                },
                qty: 1,
                Modifier: "Extra Ayam",
                Notes: "-",
            },
            time:'15.23'
        },
        {
            id: 4,
            status: "Dibuat",
            detail: {
                room: "232",
                food: {
                    foodName: "Ayam Bakar",
                    picture: "ayam-bakar.jpg",
                },
                qty: 1,
                Modifier: "Extra Pedas",
                Notes: "-",
            },
            time:'15.30'
        },
        {
            id: 5,
            status: "Diterima",
            detail: {
                room: 232,
                food: {
                    foodName: "Nasi Goreng",
                    picture: "nasi-goreng.jpg",
                },
                qty: 1,
                Modifier: "Extra Ayam",
                Notes: "-",
            },
            time:'16.00'
        }
    ],
};

export default data;