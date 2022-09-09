import React from "react";

const TemplateExpressions = () => {
    const name = "Ivan"
    const data = {
        age:24,
        job:"Programmer"
    };

    return(
        <div>
            <h1>Olá {name}, tudo bem ?</h1>
            <p>Você atua como : {data.job}</p>
            <p>Sua idade é {data.age}</p>
        </div>
    );
};


export default TemplateExpressions