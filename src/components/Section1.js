const SectionOne = () => {
    const header = 'Technoton Ltd is a leading HVAC, Engineering & Technical Services Company in Nigeria';
    const paraOne = 'We are a team of highly experienced professionals with a wide range of experience in the field of HVAC, Engineering & Technical Services. We are committed to providing our clients with the best services in the industry.';

    const dataSecOne =[
        {picture:'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdhcyUyMGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', id:1, h:'Building Services and Infrastructure', p:'We are a team of highly experienced professionals with a wide range of experience in the field of HVAC, Engineering & Technical Services.'},
        {picture:'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdhcyUyMGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=6', id:2, h:'Building Services and Infrastructure', p:'We are a team of highly experienced professionals with a wide range of experience in the field of HVAC, Engineering & Technical Services.'},
        {picture:'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdhcyUyMGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', id:3, h:'Building Services and Infrastructure', p:'We are a team of highly experienced professionals with a wide range of experience in the field of HVAC, Engineering & Technical Services.'}
    ]

    return ( 
        <>
            <div className="section-one">
                <div className="section1-div1">
                    <h1 className="section1-div1-h1"> {header}</h1>
                    <p className="section1-div1-para">{paraOne}</p>
                </div>
                <div className="section1-div2">
                    {
                        dataSecOne.map((data)=>(
                            <div className="section1-div22" key={data.id}>
                                <img src={data.picture} alt="section1-img" className="section1-div2-img"/>
                                <h1 className="section1-div2-h1">{data.h}</h1>
                                <p className="section1-div2-para">{data.p}</p>  
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
     );
}
 
export default SectionOne;