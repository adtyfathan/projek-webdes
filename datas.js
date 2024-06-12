const data = [
  {
    brand: "Lamborghini",
    model: "Revuelto",
    power: "1015 CV",
    max_speed: "350km/h",
    acceleration: "2.5s",
    image: "./asset/revuelto_m1.jpg",
    description:
      "Just before the 60th anniversary of the marque, Lamborghini unveiled Revuelto, the first HPEV (High Performance Electrified Vehicle) hybrid super sports car. With the Revuelto, Lamborghini has established a new benchmark in performance, on-board technology, and driving pleasure. The ultimate thrill provided by the Revuelto is reached thanks to a powertrain that delivers 1015 CV total, combining the power of a brand-new 12-cylinder internal combustion engine with three high-density electric motors and a groundbreaking transversal dual clutch e-gearbox. The power of hybridization is harnessed to take performance and driving emotions to an unprecedented level.",
    price: "$2,000,000",
  },
  {
    brand: "Lamborghini",
    model: "Aventador SVJ",
    power: "770 CV",
    max_speed: "350km/h",
    acceleration: "2.8s",
    image: "./asset/aventador_m.jpg",
    description:
      "The Aventador SVJ is the ultimate expression of the Lamborghini DNA. Combining the most advanced technological solutions and the highest expression of aerodynamics with the purity of its lines, the SVJ is a true icon of speed and performance. With a naturally aspirated V12 engine and lightweight construction, it delivers unparalleled power and driving dynamics.",
    price: "$517,770",
  },
  {
    brand: "Lamborghini",
    model: "Huracán EVO",
    power: "640 CV",
    max_speed: "325km/h",
    acceleration: "2.9s",
    image: "./asset/huracan_m1.jpg",
    description:
      "The Huracán EVO represents the natural evolution of the most successful V10-powered Lamborghini. Incorporating the latest technological advancements, the Huracán EVO offers enhanced aerodynamics, improved handling, and a cutting-edge infotainment system. The V10 engine delivers a thrilling driving experience, making the EVO a true masterpiece.",
    price: "$261,274",
  },
  {
    brand: "Lamborghini",
    model: "Urus",
    power: "650 CV",
    max_speed: "305km/h",
    acceleration: "3.6s",
    image: "./asset/urus.jpeg",
    description:
      "The Urus is Lamborghini's first Super SUV, merging the soul of a super sports car with the functionality of an SUV. Equipped with a 4.0-liter twin-turbo V8 engine, it delivers exceptional performance, luxury, and versatility. The Urus is designed to provide an exhilarating driving experience on any terrain.",
    price: "$218,000",
  },
  {
    brand: "Lamborghini",
    model: "Sian FKP 37",
    power: "819 CV",
    max_speed: "350km/h",
    acceleration: "2.8s",
    image: "./asset/sian.jpg",
    description:
      "The Sian FKP 37 is Lamborghini's first hybrid super sports car, featuring a groundbreaking combination of a V12 engine and a 48-volt e-motor. This limited-edition model showcases Lamborghini's commitment to innovation and sustainability while delivering unmatched power and performance. The Sian's futuristic design and advanced technology set a new standard in the world of supercars.",
    price: "$3,700,000",
  },
  {
    brand: "Lamborghini",
    model: "Gallardo LP 570-4 Superleggera",
    power: "570 CV",
    max_speed: "325km/h",
    acceleration: "3.4s",
    image: "./asset/gallardo.jpg",
    description:
      "The Gallardo LP 570-4 Superleggera is a lightweight, high-performance variant of the Gallardo. It features a 5.2-liter V10 engine, advanced aerodynamics, and extensive use of carbon fiber, making it one of the most agile and responsive Lamborghinis ever built.",
    price: "$237,600",
  },
  {
    brand: "Lamborghini",
    model: "Murciélago LP 670-4 SV",
    power: "670 CV",
    max_speed: "342km/h",
    acceleration: "3.2s",
    image: "./asset/murcielago.jpg",
    description:
      "The Murciélago LP 670-4 SV (SuperVeloce) is the ultimate version of the Murciélago, boasting increased power, reduced weight, and enhanced aerodynamics. With its 6.5-liter V12 engine and aggressive design, it delivers a raw and exhilarating driving experience.",
    price: "$450,000",
  },
  {
    brand: "Lamborghini",
    model: "Veneno",
    power: "750 CV",
    max_speed: "355km/h",
    acceleration: "2.8s",
    image: "./asset/veneno.jpeg",
    description:
      "The Lamborghini Veneno is a limited-production hypercar built to celebrate Lamborghini's 50th anniversary. With its radical design, extreme performance, and a 6.5-liter V12 engine, the Veneno is one of the most exclusive and sought-after Lamborghinis ever made.",
    price: "$4,500,000",
  },
  {
    brand: "Lamborghini",
    model: "Centenario",
    power: "770 CV",
    max_speed: "350km/h",
    acceleration: "2.8s",
    image: "./asset/centenario.jpg",
    description:
      "The Centenario was created to honor the 100th birthday of Lamborghini's founder, Ferruccio Lamborghini. It features advanced aerodynamics, cutting-edge technology, and a powerful V12 engine. The Centenario is a true collector's item, with only 40 units produced.",
    price: "$2,000,000",
  },
  {
    brand: "Lamborghini",
    model: "Reventón",
    power: "650 CV",
    max_speed: "340km/h",
    acceleration: "3.4s",
    image: "./asset/reventon.jpg",
    description:
      "The Lamborghini Reventón is an ultra-exclusive model inspired by the fastest airplanes. With its stealth-fighter design, carbon fiber body, and 6.5-liter V12 engine, the Reventón delivers exceptional performance and an unmatched visual presence.",
    price: "$2,000,000",
  },
  {
    brand: "Lamborghini",
    model: "Diablo SV",
    power: "530 CV",
    max_speed: "335km/h",
    acceleration: "3.9s",
    image: "./asset/diablo.jpg",
    description:
      "The Diablo SV (SuperVeloce) is a high-performance variant of the iconic Diablo. With a 5.7-liter V12 engine and rear-wheel drive, the Diablo SV offers an exhilarating driving experience with distinctive styling and raw power.",
    price: "$300,000",
  },
  {
    brand: "Lamborghini",
    model: "Countach LPI 800-4",
    power: "814 CV",
    max_speed: "355km/h",
    acceleration: "2.8s",
    image: "./asset/countach.jpg",
    description:
      "The Countach LPI 800-4 is a modern interpretation of the classic Countach, celebrating its legacy with advanced hybrid technology and a powerful V12 engine. With its iconic design and cutting-edge performance, the Countach LPI 800-4 bridges the past and future of Lamborghini.",
    price: "$2,640,000",
  },
  {
    brand: "Lamborghini",
    model: "Huracán STO",
    power: "640 CV",
    max_speed: "310km/h",
    acceleration: "3.0s",
    image: "./asset/sto.jpg",
    description:
      "The Huracán STO (Super Trofeo Omologata) is a track-focused variant of the Huracán, designed for maximum performance and agility. With a naturally aspirated V10 engine and advanced aerodynamics, the Huracán STO delivers an unparalleled driving experience on both road and track.",
    price: "$327,838",
  },
  {
    brand: "Lamborghini",
    model: "Essenza SCV12",
    power: "830 CV",
    max_speed: "N/A",
    acceleration: "N/A",
    image: "./asset/scv.jpg",
    description:
      "The Essenza SCV12 is a track-only hypercar with the most powerful V12 engine ever developed by Lamborghini. It features advanced aerodynamics and lightweight construction, designed exclusively for high-performance driving on the track.",
    price: "$2,700,000",
  },
  {
    brand: "Lamborghini",
    model: "Sián Roadster",
    power: "819 CV",
    max_speed: "350km/h",
    acceleration: "2.9s",
    image: "./asset/sian-roadster.jpg",
    description:
      "The Sián Roadster combines Lamborghini's legendary V12 engine with hybrid technology, offering a unique open-top driving experience. With its futuristic design and innovative powertrain, the Sián Roadster represents the pinnacle of Lamborghini's engineering and performance.",
    price: "$3,700,000",
  },
  {
    brand: "Lamborghini",
    model: "Jarama GT",
    power: "350 CV",
    max_speed: "260km/h",
    acceleration: "6.8s",
    image: "./asset/jarama.jpg",
    description:
      "The Lamborghini Jarama GT is a classic grand tourer from the 1970s, featuring a 3.9-liter V12 engine and distinctive styling. Known for its luxurious interior and refined performance, the Jarama GT is a testament to Lamborghini's heritage of elegance and power.",
    price: "$350,000",
  },
  {
    brand: "Lamborghini",
    model: "Miura P400 SV",
    power: "385 CV",
    max_speed: "290km/h",
    acceleration: "6.7s",
    image: "./asset/miura.jpg",
    description:
      "The Miura P400 SV is an iconic supercar from the 1970s, often considered the first true supercar. With its mid-engine layout and stunning design, the Miura SV set new standards for performance and aesthetics in the automotive world.",
    price: "$3,000,000",
  },
  {
    brand: "Ferrari",
    model: "SF90 Stradale",
    power: "1000 CV",
    max_speed: "340 km/h",
    acceleration: "2.5s",
    image: "./asset/ferrari-sf90-stradale.jpg",
    description:
      "Ferrari introduces the SF90 Stradale, a revolutionary hybrid supercar that sets a new standard in performance, innovation, and driving experience. Celebrating the pinnacle of Ferrari's engineering prowess, the SF90 Stradale delivers a stunning 1000 CV through a combination of a V8 internal combustion engine and three electric motors. This state-of-the-art powertrain is paired with an advanced all-wheel-drive system and an 8-speed dual-clutch transmission, ensuring unparalleled speed and handling. The SF90 Stradale encapsulates Ferrari's commitment to pushing the boundaries of hybrid technology, offering an unmatched fusion of power, precision, and pure driving exhilaration.",
    price: "$625,000",
  },
  {
    brand: "Ferrari",
    model: "LaFerrari",
    power: "950 CV",
    max_speed: "350 km/h",
    acceleration: "2.6s",
    image: "./asset/Laferrari.jpg",
    description:
      "Ferrari's LaFerrari represents the pinnacle of the brand's expertise in engineering and design. As Ferrari's first hybrid supercar, LaFerrari boasts an impressive 950 CV, generated by a powerful V12 engine combined with an electric motor. This masterpiece of technology and performance offers a maximum speed of 350 km/h and accelerates from 0 to 100 km/h in just 2.6 seconds. LaFerrari merges cutting-edge hybrid technology with Ferrari's timeless passion for performance, delivering an unrivaled driving experience that pushes the boundaries of innovation and speed.",
    price: "$1,500,000",
  },
  {
    brand: "Ferrari",
    model: "488 Pista",
    power: "720 CV",
    max_speed: "340 km/h",
    acceleration: "2.85s",
    image: "./asset/488.jpg",
    description:
      "The Ferrari 488 Pista stands as a testament to Ferrari's relentless pursuit of excellence in high-performance sports cars. With 720 CV, this supercar features the most powerful V8 engine in Ferrari's history. The 488 Pista reaches a top speed of 340 km/h and accelerates from 0 to 100 km/h in just 2.85 seconds. Built for the track but designed for the road, the 488 Pista combines advanced aerodynamics, cutting-edge technology, and Ferrari's signature driving dynamics to offer an unparalleled experience for enthusiasts seeking the ultimate thrill.",
    price: "$350,000",
  },
  {
    brand: "Ferrari",
    model: "812 Superfast",
    power: "800 CV",
    max_speed: "340 km/h",
    acceleration: "2.9s",
    image: "./asset/812.jpg",
    description:
      "The Ferrari 812 Superfast sets a new benchmark for front-engine sports cars with its extraordinary performance and dynamic driving capabilities. Powered by a naturally aspirated V12 engine producing 800 CV, the 812 Superfast achieves a top speed of 340 km/h and sprints from 0 to 100 km/h in just 2.9 seconds. This supercar exemplifies Ferrari's commitment to delivering unmatched power, speed, and agility. The 812 Superfast embodies the essence of Ferrari, combining luxurious design with groundbreaking engineering to create an exhilarating and unforgettable driving experience.",
    price: "$335,000",
  },
  {
    brand: "Ferrari",
    model: "Portofino M",
    power: "620 CV",
    max_speed: "320 km/h",
    acceleration: "3.45s",
    image: "./asset/Ferrari Portofino.jpg",
    description:
      "The Ferrari Portofino M represents the evolution of the renowned Portofino, combining elegant design with exhilarating performance. With 620 CV generated by a turbocharged V8 engine, the Portofino M achieves a top speed of 320 km/h and accelerates from 0 to 100 km/h in just 3.45 seconds. This convertible GT is designed for both comfort and speed, offering a versatile driving experience that encompasses the thrill of Ferrari's performance capabilities and the luxury of open-top driving.",
    price: "$245,000",
  },
  {
    brand: "Ferrari",
    model: "F8 Tributo",
    power: "720 CV",
    max_speed: "340 km/h",
    acceleration: "2.9s",
    image: "./asset/F8.jpg",
    description:
      "The Ferrari F8 Tributo pays homage to Ferrari's illustrious V8 lineage, offering an unparalleled blend of performance, handling, and driving pleasure. Powered by a 720 CV twin-turbo V8 engine, the F8 Tributo reaches a top speed of 340 km/h and accelerates from 0 to 100 km/h in just 2.9 seconds. This mid-engine sports car features advanced aerodynamics and cutting-edge technology, delivering an exhilarating and responsive driving experience that epitomizes Ferrari's commitment to engineering excellence and passion for speed.",
    price: "$280,000",
  },
  {
    brand: "Ferrari",
    model: "Roma",
    power: "620 CV",
    max_speed: "320 km/h",
    acceleration: "3.4s",
    image: "./asset/ferrari-roma.jpg",
    description:
      "The Ferrari Roma embodies La Nuova Dolce Vita, blending timeless elegance with cutting-edge performance. With a 620 CV turbocharged V8 engine, the Roma achieves a top speed of 320 km/h and accelerates from 0 to 100 km/h in 3.4 seconds. This grand tourer features a refined design and luxurious interior, offering an exceptional driving experience that combines Ferrari's iconic performance with modern sophistication and style.",
    price: "$220,000",
  },
  {
    brand: "Ferrari",
    model: "Monza SP2",
    power: "810 CV",
    max_speed: "300 km/h",
    acceleration: "2.9s",
    image: "./asset/sp2.jpg",
    description:
      "The Ferrari Monza SP2 is a limited-edition speedster that pays tribute to Ferrari's racing heritage. With 810 CV delivered by a naturally aspirated V12 engine, the Monza SP2 reaches a top speed of 300 km/h and accelerates from 0 to 100 km/h in just 2.9 seconds. This exclusive model features a unique open-cockpit design, advanced aerodynamics, and luxurious craftsmanship, offering a pure and exhilarating driving experience that connects drivers to the essence of Ferrari's racing spirit.",
    price: "$1,800,000",
  },
  {
    brand: "Porsche",
    model: "Taycan Turbo S",
    power: "761 PS",
    max_speed: "260km/h",
    acceleration: "2.8s",
    description:
      "The Porsche Taycan Turbo S represents the future of electric sports cars. With an all-electric powertrain, the Taycan Turbo S combines Porsche's legendary performance with cutting-edge technology. It features a dual-motor setup that produces 761 PS and can accelerate from 0 to 100 km/h in just 2.8 seconds. The Taycan Turbo S also boasts advanced driving dynamics and a luxurious interior, making it a perfect blend of innovation and tradition. The car's top speed is 260 km/h, and it offers an unparalleled driving experience, proving that electrification does not compromise the thrill of driving a Porsche.",
    price: "$185,000",
  },
  {
    brand: "Porsche",
    model: "911 GT3 RS",
    power: "520 hp",
    max_speed: "312 km/h",
    acceleration: "3.0s",
    description:
      "The Porsche 911 GT3 RS is a track-focused version of the iconic 911 sports car. It is powered by a naturally aspirated 4.0-liter flat-six engine that produces 520 horsepower. With a top speed of 312 km/h and a 0-100 km/h acceleration time of just 3.0 seconds, the 911 GT3 RS delivers exhilarating performance on both the road and the track. Its aerodynamic enhancements, lightweight construction, and precision-tuned chassis make it a favorite among driving enthusiasts seeking the ultimate Porsche experience.",
    price: "$188,000",
  },
  {
    brand: "Porsche",
    model: "Cayenne Turbo S E-Hybrid",
    power: "680 hp",
    max_speed: "295 km/h",
    acceleration: "3.8s",
    description:
      "The Porsche Cayenne Turbo S E-Hybrid is a high-performance SUV that combines electrification with Porsche's renowned performance capabilities. It features a hybrid powertrain consisting of a twin-turbo V8 engine and an electric motor, producing a combined output of 680 horsepower. With a top speed of 295 km/h and a 0-100 km/h acceleration time of 3.8 seconds, the Cayenne Turbo S E-Hybrid offers impressive performance for an SUV. Its luxurious interior, advanced technology features, and dynamic driving characteristics make it a versatile and desirable choice for those seeking a blend of power, efficiency, and comfort.",
    price: "$161,900",
  },
  {
    brand: "Porsche",
    model: "Panamera Turbo S E-Hybrid",
    power: "700 hp",
    max_speed: "315 km/h",
    acceleration: "3.2s",
    description:
      "The Porsche Panamera Turbo S E-Hybrid is a luxurious and high-performance hybrid sedan. It combines a twin-turbo V8 engine with an electric motor to produce a total output of 700 horsepower. With a top speed of 315 km/h and a 0-100 km/h acceleration time of 3.2 seconds, the Panamera Turbo S E-Hybrid offers sports car performance in a spacious and comfortable package. Its advanced technology, elegant design, and dynamic driving characteristics make it a standout choice in the luxury sedan segment.",
    price: "$187,700",
  },
  {
    brand: "Porsche",
    model: "718 Cayman GT4",
    power: "420 hp",
    max_speed: "304 km/h",
    acceleration: "4.4s",
    description:
      "The Porsche 718 Cayman GT4 is a high-performance sports car designed for driving enthusiasts. Powered by a naturally aspirated flat-six engine, it produces 420 horsepower and delivers exhilarating performance on both road and track. With a top speed of 304 km/h and a 0-100 km/h acceleration time of 4.4 seconds, the 718 Cayman GT4 offers precise handling, superb agility, and a thrilling driving experience. Its lightweight construction, aerodynamic design, and racing-inspired features make it a favorite among Porsche enthusiasts.",
    price: "$141,700",
  },
  {
    brand: "Porsche",
    model: "Macan Turbo",
    power: "440 hp",
    max_speed: "270 km/h",
    acceleration: "4.3s",
    description:
      "The Porsche Macan Turbo is a compact luxury SUV that offers sporty performance and everyday practicality. Powered by a turbocharged V6 engine, it produces 440 horsepower and delivers dynamic driving characteristics. With a top speed of 270 km/h and a 0-100 km/h acceleration time of 4.3 seconds, the Macan Turbo combines Porsche's performance heritage with SUV versatility. Its stylish design, premium interior, and advanced technology features make it a desirable choice for those seeking a blend of sportiness and functionality.",
    price: "$83,600",
  },
  {
    brand: "Porsche",
    model: "911 Turbo S",
    power: "640 hp",
    max_speed: "330 km/h",
    acceleration: "2.7s",
    description:
      "The Porsche 911 Turbo S is a high-performance sports car that combines luxury and speed. It features a twin-turbocharged flat-six engine producing 640 horsepower, enabling it to reach a top speed of 330 km/h and accelerate from 0 to 100 km/h in just 2.7 seconds. The 911 Turbo S offers exceptional handling, advanced technology, and a refined interior, making it a top choice for enthusiasts seeking both track performance and everyday comfort.",
    price: "$216,300",
  },
  {
    brand: "Porsche",
    model: "Taycan Cross Turismo",
    power: "560 hp",
    max_speed: "250 km/h",
    acceleration: "3.3s",
    description:
      "The Porsche Taycan Cross Turismo is an all-electric performance wagon that combines versatility with thrilling driving dynamics. With a dual-motor setup producing 560 horsepower, it can accelerate from 0 to 100 km/h in 3.3 seconds and reach a top speed of 250 km/h. The Cross Turismo offers ample cargo space, off-road capability, and the latest in electric vehicle technology, making it a versatile choice for those seeking an eco-friendly yet exciting driving experience.",
    price: "$150,900",
  },
  {
    brand: "Porsche",
    model: "718 Boxster GTS 4.0",
    power: "400 hp",
    max_speed: "293 km/h",
    acceleration: "4.5s",
    description:
      "The Porsche 718 Boxster GTS 4.0 is a mid-engine sports car that offers a perfect balance of performance and driving pleasure. Powered by a naturally aspirated flat-six engine producing 400 horsepower, it can reach a top speed of 293 km/h and accelerate from 0 to 100 km/h in 4.5 seconds. The Boxster GTS 4.0 features agile handling, a sleek design, and a convertible top, making it an ideal choice for open-air driving enthusiasts.",
    price: "$90,300",
  },
  {
    brand: "Porsche",
    model: "Cayman GT4 RS",
    power: "500 hp",
    max_speed: "320 km/h",
    acceleration: "3.7s",
    description:
      "The Porsche Cayman GT4 RS is a track-focused sports car that pushes the boundaries of performance. With a 500-horsepower naturally aspirated engine, it can reach a top speed of 320 km/h and accelerate from 0 to 100 km/h in just 3.7 seconds. The Cayman GT4 RS features aerodynamic enhancements, lightweight construction, and precision engineering, delivering an exhilarating driving experience both on the track and the road.",
    price: "$141,700",
  },
];

const news = [
  {
    title: "MERCEDES-AMG GT LANDS WITH $136,050 BASE PRICE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "8 JUNE 2024",
    image: "./asset/mercedes_n.jpg",
  },
  {
    title: "ASTON MARTIN GETS SERIOUS ABOUT PERFORMANCE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "4 JUNE 2024",
    image: "./asset/aston_n.jpg",
  },
  {
    title: "BMW Z4 ADDS MANUAL TRANSMITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "3 JUNE 2024",
    image: "./asset/bmw_n.jpg",
  },
  {
    title: "MERCEDES-AMG GT LANDS WITH $136,050 BASE PRICE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "8 JUNE 2024",
    image: "./asset/mercedes_n.jpg",
  },
  {
    title: "ASTON MARTIN GETS SERIOUS ABOUT PERFORMANCE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "4 JUNE 2024",
    image: "./asset/aston_n.jpg",
  },
  {
    title: "BMW Z4 ADDS MANUAL TRANSMITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "3 JUNE 2024",
    image: "./asset/bmw_n.jpg",
  },
  {
    title: "MERCEDES-AMG GT LANDS WITH $136,050 BASE PRICE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "8 JUNE 2024",
    image: "./asset/mercedes_n.jpg",
  },
  {
    title: "ASTON MARTIN GETS SERIOUS ABOUT PERFORMANCE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "4 JUNE 2024",
    image: "./asset/aston_n.jpg",
  },
  {
    title: "BMW Z4 ADDS MANUAL TRANSMITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "3 JUNE 2024",
    image: "./asset/bmw_n.jpg",
  },
  {
    title: "MERCEDES-AMG GT LANDS WITH $136,050 BASE PRICE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "8 JUNE 2024",
    image: "./asset/mercedes_n.jpg",
  },
  {
    title: "ASTON MARTIN GETS SERIOUS ABOUT PERFORMANCE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "4 JUNE 2024",
    image: "./asset/aston_n.jpg",
  },
  {
    title: "BMW Z4 ADDS MANUAL TRANSMITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "3 JUNE 2024",
    image: "./asset/bmw_n.jpg",
  },
  {
    title: "MERCEDES-AMG GT LANDS WITH $136,050 BASE PRICE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "8 JUNE 2024",
    image: "./asset/mercedes_n.jpg",
  },
  {
    title: "ASTON MARTIN GETS SERIOUS ABOUT PERFORMANCE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "4 JUNE 2024",
    image: "./asset/aston_n.jpg",
  },
  {
    title: "BMW Z4 ADDS MANUAL TRANSMITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus eget dui iaculis aliquam. Quisque in euismod diam. Aliquam mollis tortor ut tellus elementum, eget luctus tortor fringilla.",
    date: "3 JUNE 2024",
    image: "./asset/bmw_n.jpg",
  },
];

export { data, news };
