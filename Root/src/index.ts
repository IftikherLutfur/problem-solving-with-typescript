{
    function formatSring(input: string, toUppercase: boolean = true): string {
        return toUppercase ? input.toUpperCase() : input.toLocaleLowerCase()
    }
    console.log(formatSring("Hello World"));
    console.log(formatSring("Hello World", true));
    console.log(formatSring("Hello World", false));


    function filterByRating(items:
        {
            title: string;
            rating: number
        }[]): {
            title: string;
            rating: number
        }[] {
        const result = items.filter((item) => {
            return item.rating >= 4
        })

        return result
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];

      console.log(filterByRating(books));
// 

    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const result = arrays.reduce((acc, curr) => acc.concat(curr), [])
        return result;
    }

      console.log(concatenateArrays(["a", "b"], ["c"]));
      console.log(concatenateArrays([1, 2], [3, 4], [5]));

    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make,
                this.year = year
        }
        getInfo() {
            console.log(`Make: ${this.make} Year: ${this.year}`);

        }
    }

    class Car extends Vehicle {
        model: string

        constructor(make: string, year: number, model: string) {
            super(make, year)
            this.model = model
        }

        getModel(){
            console.log(`Model:${this.model}`);
            
        }
    }

    const myCar = new Car ("Toyota", 2020, "Corolla")
    myCar.getInfo()
    myCar.getModel()


    function processValue(value: string | number): number{
        if(typeof value === "string"){
            return value.length
        }
        else if(typeof value === "number"){
            return value * value
        }
        return 0
    }

    console.log(processValue("788"));
    console.log(processValue(8));
    

    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if(products.length === 0){
            return null
        }
        const mostExpensiveProduct = products.reduce((maxProduct, currentProduct)=>{
            return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
        })

        return mostExpensiveProduct
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
      console.log(getMostExpensiveProduct(products));

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }

      function getDayType(day: Day): string {
        if(day === Day.Saturday || day === Day.Sunday){
         return "Weekend"
        }
        else{
            return "WeekDay"
        }
      }

      console.log(getDayType(Day.Saturday));
      console.log(getDayType(Day.Tuesday));

    async function squareAsync(n: number): Promise<number>{
        if(n<0){
            return Promise.reject("Number canot be negative")
        }
        return new Promise((resolve)=>{
            setTimeout(()=>{
            resolve(n*n)
            }, 1000)
        })
    }
      
    squareAsync(4).then(console.log)
    

      
     
}
