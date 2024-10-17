import CarCard from "./CarCard";



export default function Home() {



  const cars = [
    { 
      id: 1 ,
      name: "BMW i8",
      price: "147500",
      cc: "1499",
      mileage: "47",
      image: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fgallery%2Fbmw%2Fi8%2Fexterior%2Fbmw-i8-front_3-4th_view.jpg%3Fv%3D2016-09-27&w=640&q=75",
    },
    {
      id: 2 ,
      name: "Audi R8",
      price: "169900",
      cc: "5204",
      mileage: "13",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTXJWm7dKW83-VsjEHN9985xSphHI8rO2og&s",
    },
    {
      id: 3 ,
      name: "Mercedes AMG GT",
      price: "118600",
      cc: "3982",
      mileage: "19",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHgE28Xf0KF0U1cPGg1rDH5FJuo4ZAeJ6Mg&s",
    },
    {

      id: 4 ,
      name: "Porsche 911",
      price: "135000",
      cc: "2981",
      mileage: "21",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVF9Efx6dbwHh12eJpIBU4lRfaZuV00Ilkag&s",
    },
    {
      id: 5 ,
      name: "Jaguar F-Type",
      price: "73000",
      cc: "5000",
      mileage: "15",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzVtMXoHWFOa7GJhTNvN3RA0kf1du8fGr8dw&s",
    },
    {
      id: 6 ,
      name: "Ford Mustang",
      price: "55000",
      cc: "4951",
      mileage: "12",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ford/Mustang-2024/7939/1663750110692/front-left-side-47.jpg",
    },
    {
      id: 7 ,
      name: "Chevrolet Camaro",
      price: "62000",
      cc: "6200",
      mileage: "14",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLjLhmtnFNqTssTMPtfkqu1X8xUiU8Kt_LA&s",
    },
    {
      id: 8 ,
      name: "Nissan GT-R",
      price: "113540",
      cc: "3799",
      mileage: "16",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSo76fptbJgt3wQNNHFxCgC5ElMKWYbnjGZQ&s",
    },
    {
      id: 9 ,
      name: "Lamborghini Huracan",
      price: "210000",
      cc: "5204",
      mileage: "15",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHcWX2ZEi-HjSMkjY1CswuXoAWfsjJijfVQ&s",
    },
    {
      id: 10 ,
      name: "Ferrari 488",
      price: "262000",
      cc: "3902",
      mileage: "18",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-STdjOGerFpF5JuGmWB2YHgEkS1IMy2yGA&s",
    },
    {
      id: 11 ,
      name: "McLaren 720S",
      price: "299000",
      cc: "3994",
      mileage: "19",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvhovpUSLhsqn-sueuvx_8VQb5j03X9e4UA&s",
    },
    {
      id: 12 ,
      name: "Aston Martin DB11",
      price: "205600",
      cc: "5204",
      mileage: "20",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUDDhWAEj6U8jvGmBXzQzufimza0gCWcnoA&s",
    },
    {
      id: 13 ,
      name: "Rolls-Royce Ghost",
      price: "315000",
      cc: "6750",
      mileage: "10",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgL7HXMv-lH2sM_5vxaebOgCgXw6babnaZw&s",
    },
    {
      id: 14 ,
      name: "Bentley Continental GT",
      price: "231800",
      cc: "5998",
      mileage: "15",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxytd2zhNaS5p4oKlQGmncg7V4YDOFKpV-KA&s",
    },
    {
      id: 15 ,
      name: "Maserati Ghibli",
      price: "78000",
      cc: "2979",
      mileage: "18",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQjsjqtldyzubc-r7fmW6cIridxxMf2YmKw&s",
    },
    {
      id: 16 ,
      name: "Tesla Model X",
      price: "89990",
      cc: "Electric",
      mileage: "93",
      image: "https://imgcdn.oto.com/large/gallery/exterior/133/2222/tesla-model-x-front-angle-low-view-481563.jpg",
    },
    {
      id: 17 ,
      name: "Lexus LC 500",
      price: "93000",
      cc: "4969",
      mileage: "19",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIS46KecO5lCuTzlqp3GDR3YLjHJVtbsHPw&s",
    },
    {
      id: 18 ,
      name: "Honda NSX",
      price: "157500",
      cc: "3493",
      mileage: "21",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gzZIENGfkP_6BuhOGL9355fCh0bfElYLMg&s",
    },
    {
      id: 19 ,
      name: "Dodge Challenger SRT",
      price: "73000",
      cc: "6162",
      mileage: "12",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rBR5bkiNwrKvQadF6AjgWvUA-O_AtfYMqg&s",
    },
    {
      id: 20 ,
      name: "Kia Stinger",
      price: "51000",
      cc: "3342",
      mileage: "22",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5mBxO5JBo9hJ5OqisVMr9O5A5cBaLmoOVg&s",
    },

  ];


  return (

    <>
      <div className="car-container">
        
        <div className="car-div">
          {cars.map((car)=>{
           return <CarCard key={car.id} car={car}/>
          })}
        </div>

      </div>

    </>
  )
}








