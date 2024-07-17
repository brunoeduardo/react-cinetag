const { createContext, useState } = require("react");

export const FavoriteContext = createContext();
FavoriteContext.displayName = "Favorites";

const  FavoriteProvider = ({children}) => {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoriteContext.Provider value={{favorite, setFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteProvider