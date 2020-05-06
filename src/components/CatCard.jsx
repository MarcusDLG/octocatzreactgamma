import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CatCard = () => {
  const [octocats, setOctocats] = useState([{ authors: [] }])
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    const loadCats = async () => {
      const resp = await axios.get('https://sdg-octodex.herokuapp.com')
      setOctocats((prevOctocats) => {
        prevOctocats = resp.data.data
        return prevOctocats
      })
      setIsLoaded(true)
      console.log(resp.data.data)
    }
    loadCats()
  }, [])
  if (isLoaded) {
    return (
      <>
        {octocats.map((cat) => {
          return (
            <div>
              <section className="card">
                <img className="octocatPic" src={cat.image} alt={cat.alt} />
                <section className="cardDescription">
                  <p>
                    <span className="cat-number">{cat.number}:</span>{' '}
                    <strong>{cat.name}</strong>
                  </p>
                  <section className="authors">
                    {/* <img src={cat.authors[0].image} alt="small github symbol" /> */}
                    {cat.authors.map((author) => {
                      return (
                        <a href={author.link}>
                          <img src={author.image} alt="small github symbol" />
                        </a>
                      )
                    })}
                  </section>
                </section>
              </section>
            </div>
          )
        })}
      </>
    )
  } else {
    return <div>loading . . .</div>
  }
}

export default CatCard
