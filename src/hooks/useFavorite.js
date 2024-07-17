import { FavoriteContext }  from "context/Favorite"
import { useContext } from "react"

const useFavoriteContext = () => {
    const {favorite, setFavorite} = useContext(FavoriteContext)

    const addFavorite = (newFavorite) => {
         const hasFavorite = favorite.some((item) => item.id === newFavorite.id)   
        
        if(!hasFavorite) {
            return setFavorite([...favorite, newFavorite])
        }

        const listFavorites = favorite.filter((item) => item.id !== newFavorite.id)
        return setFavorite(listFavorites)

    }

    return {favorite, addFavorite}
}

export default useFavoriteContext