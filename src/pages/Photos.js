import React, {useContext} from "react"
import {MyContext} from "../context/MyContext"
import ImageCard from "../components/ImageCard"
import {getClass} from "../utils/getClass"


function Photos() {
    const {photos} =  useContext(MyContext) //destructure photos our of context

    const renderPhotos = photos.map((img, index) => { //we can pass array index in map method
        //console.log(photos.indexOf(img))
        return <ImageCard key={img.id} img={img} className={getClass(index)}/>
    })

    return (
        <main className="photos">
            {renderPhotos}
        </main>
    )
}

export default Photos