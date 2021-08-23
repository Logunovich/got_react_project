export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }

        return await res.json();
    }

    getAllBooks() {
        return this.getResource(`/books/`);
    }
    
    getBook(id) {
        return this.getResource(`/books/${id}/`);
    }
    
    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter)
    }
    
    async getCharacter (id) {
        const charachter = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(charachter)
    }
    
    getAllHouses() {
        return this.getResource(`/houses/`);
    }
    
    getHouse(id) {
        return this.getResource(`/houses/${id}/`);
    }

    _transformCharacter(char) {
        let {name, gender, born, died, culture} = char;
        const noData = 'no data :(('

        if (!name) {
            name = noData
        }

        if (!gender) {
            gender = noData
        }
        
        if (!born) {
            born = noData
        }

        if (!died) {
            died = noData
        }

        if (!culture) {
            culture = noData
        }

        return {
            name: name, 
            gender: gender, 
            born: born, 
            died: died, 
            culture: culture
        }
    }


    _transformHouse(house){
        return {
            name: house.name,
            regione: house.regione,
            words: house.words, 
            titles: house.titles,
            overlord: house.overlord, 
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publicer: book.publicer,
            released: book.released,
            
        }
    }
}