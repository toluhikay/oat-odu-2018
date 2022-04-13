const Hero = () => {
    const heros = [
        {heroImg:'https://media.istockphoto.com/photos/cars-on-production-line-in-factory-picture-id1320950393?b=1&k=20&m=1320950393&s=170667a&w=0&h=JH6sLTsrvPZh5YrTrSSFIMvcG9sT3lpXqFYfI-RUjJw=',
        heroH1:'Industrial Cooling',
        heroP:'We Specialize in Industrial Cooling and the likes'
        }
    ];
    const button ='Learn More'
    return ( 
        <>
            {
                heros.map((hero)=>(
                    <div className="hero">
                        <h1 className="hero-h1">{hero.heroH1}</h1>
                        <p className="hero-p">{hero.heroP}</p>
                        <button className="hero-button">{button}</button>
                    </div>
                ))
            }
        </>
     );
}
 
export default Hero;