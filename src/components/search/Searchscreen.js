import { useMemo } from "react";
import { useNavigate, useLocaton } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from 'query-string';

export const SearchScreen = () => {

    const navigation = useNavigate();
    const location = useLocaton();
    const dispatch = useDispatch();

    const { name } = useSelector( state => state.auth );

    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;

    // const userfiltered = useMemo(() => getUsers( searchText ), [ searchText ]);
    // const TechFiltered = useMemo(() => getTechnicians( searchText ), [ searchText ]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigation( `/search/${ searchText }` );

    }


    return (
        <div className="search__container">
            <div className="search__container__header">
                <div className="search__container__header__title">
                    <h1>Search</h1>
                </div>
                <div className="search__container__header__search">
                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Search for something..."
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button 
                            className="btn btn-primary"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="search__container__body">
                <div className="search__container__body__title">
                    <h2>Search results</h2>
                </div>
                <div className="search__container__body__results">
                    <div className="search__container__body__results__users">
                        <h3>Users</h3>
                        <ul>
                            {/* { userfiltered.map( user => (
                                <li key={ user.id }>
                                    <Link to={ `/user/${ user.id }` }>
                                        { user.name }
                                    </Link>
                                </li>
                            )) } */}
                        </ul>
                    </div>
                    <div className="search__container__body__results__technicians">
                        <h3>Technicians</h3>
                        <ul>
                            {/* { TechFiltered.map( technician => (
                                <li key={ technician.id }>
                                    <Link to={ `/technician/${ technician.id }` }>
                                        { technician.name }
                                    </Link>
                                </li>
                            )) } */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        

    )


}
