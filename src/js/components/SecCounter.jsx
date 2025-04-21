import React, { useEffect, useState } from "react";

export const SecCounter = () => {
    const [counter, setCounter] = useState(0);

    //Incremento del contador por segundo
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    //Fin incremento del contador por segundo

    // Convertir el contador a formato de 6 dígitos con ceros a la izquierda
    const formattedCounter = counter.toString().padStart(6, "0");

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 bg-black text-white d-flex justify-content-center">
                    <h1 className="me-2"><i className="fa-solid fa-clock text-white"></i></h1>
                    <h1 className="d-flex">
                        {formattedCounter.split("").map((digit, index) => (
                            <span key={index} className="mx-1">
                                {digit}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>
        </div>
    );
};
