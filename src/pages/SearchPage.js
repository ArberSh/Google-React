import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import response from '../response';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GoogleImg from '../assets/Google.png'

function SearchPage() {
    const [{ term }] = useStateValue();

    // LIVE API CALL
    const { data } = useGoogleSearch(term);

    // const data = response;

    console.log('DATA: ',data)
  return (
    <div className='searchPage'>
        <div className='searchPage__header'>
            <Link to="/">
                <img className="searchPage__logo" src={GoogleImg}></img>
            </Link>

            <div className='searchPage__headerBody'>
                <Search hideButtons />

                <div className='searchPage__options'>
                    <div className='searchPage__optionsLeft'>
                        <div className='searchPage__option'>
                            <SearchIcon/>
                            <Link to="/all">All</Link>
                        </div>
                        <div className='searchPage__option'>
                            <ImageIcon/>
                            <Link to="/all">Images</Link>
                        </div>
                        <div className='searchPage__option'>
                            <NewspaperIcon/>
                            <Link to="/all">News</Link>
                        </div>
                        <div className='searchPage__option'>
                            <LocalOfferIcon/>
                            <Link to="/all">Shopping</Link>
                        </div>
                        <div className='searchPage__option'>
                            <LocationOnIcon/>
                            <Link to="/all">Location</Link>
                        </div>
                        <div className='searchPage__option'>
                            <MoreVertIcon/>
                            <Link to="/all">More</Link>
                        </div>
                    </div>

                    <div className='searchPage__optionRight'>
                        <div className='searchPage__option'>
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div className='searchPage__option'>
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {term && (
        <div className='searchPage__results'>
            <p className='searchPage__resultCount'>
                About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)  for {term}
            </p>

            {data?.items.map(item => (
                <div className='searchPage__result'>
                    <a className='searchPage__resultLink' href={item.link}>
                        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                            <img className='searchPage__resultImage' 
                            src={item.pagemap?.cse_image?.length > 0 &&
                                 item.pagemap?.cse_image[0]?.src
                            }>
                                
                            </img>
                        )
                        
                        }
                        {item.displayLink}
                        </a>
                    <a className='searchPage__resultTitle' href={item.link}>
                        <h2>{item.title}</h2>
                    </a>
                    <p className='searchPage__resultSnippet'>
                        {item.snippet}
                    </p>
                </div>
            ))}
        </div>
        )}
        
    </div>
  )
}

export default SearchPage