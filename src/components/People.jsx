import { useState, useEffect } from "react";
const People = () => {
    const [resultData, setResultData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [searchData, setSearchData] = useState([]);


    useEffect(() => {
        fetch('https://655f3b29879575426b44e200.mockapi.io/api/worker/workers')
            .then(res => res.json())
            .then(data => {
                setResultData(data)
                console.log(data);
            })
        console.log(resultData);
    }, [])
    const search = (e) => {
        setSearchData(e.target.value.toLowerCase())

    }
    const orderData = (e) => {
        setFilterData(e.target.value.toLowerCase())
    }

    return (
        <div>
            <input onChange={search} type="text" placeholder='Search' />
            <input onChange={orderData} type="text" placeholder='Filter' />
            <div className='infos'>
                {
                    resultData.filter((e => e.name.toLowerCase().includes(searchData)) && (e => e.department.toLowerCase().includes(filterData)))
                        .map((m, i) => (
                            <div className='info' key={i} >
                                <p>Name : {m.name} </p>
                                <p>Department : {m.department}</p>
                                <p>Role : {m.role}</p>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default People