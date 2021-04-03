export default class DataService {
    async getResource(){
    const res = await fetch(`https://www.nbrb.by/api/exrates/rates?periodicity=0`);
    if(!res.ok){
        throw new  Error(`Could not fetch https://www.nbrb.by/api/exrates/rates?periodicity=0 `);
    }
    return await res.json();
}

}