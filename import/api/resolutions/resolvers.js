import Resolutions from './resolutions'

// Resolutions.insert({
//     name:"Test Res"
// })

Resolutions.find({}).fetch();
//This is a methode resolvers//


export default{
    Query: {
        resolutions() {
            return Resolutions.find({}).fetch();
        }
    }
}