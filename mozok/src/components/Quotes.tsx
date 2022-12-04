import {rootCertificates} from "tls";
import ReactDOM from "react-dom/client";
import {useState} from "react";


function Quotes(){

    var cranny:string = "";

        var rows=[ <div>init</div> ];


        fetch('https://fakerapi.it/api/v1/persons?_quantity=20', {
            method: 'GET',
            // mode: "no-cors",
        })
            .then(
                res => {
                    return res.json();
                }
            )
            .then(
                data => {
                    for (var i = 0; i < data.data.length; i++) {
                        rows.push(<tr>
                            <td>{data.data[i].id}</td>
                            <td>{data.data[i].firstname}</td>
                            <td>{data.data[i].lastname}</td>
                            <td>{data.data[i].birthday}</td>
                            <td>{data.data[i].gender}</td>
                        </tr>);
                        cranny += data.data[i].firstname;
                        console.log(data.data[i]);
                    }

                    // return rows;

                    // processData(data.data);
                }
            )
            .catch(
                (reason) => {
                    console.log("Error: \n" + reason);
                }
            )
            .finally(
                () => {
                    console.log("this is just a final signal.");
                }
            );






    var testOut = <div>edited quotes ne mi se veruva</div>;

    return <table>{cranny}</table>;
}

export default Quotes;
