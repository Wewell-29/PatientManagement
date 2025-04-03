const sampleGet = async(request, response) =>{
    response.status(200).json({'test': 'test-test'})
}

const samplePost = async(request, response) =>{
    //console.log(request.params)
    const {test} = request.body
    console.log(test)
    response.status(200).json({'test': 'test-test1'})
}
module.exports = {sampleGet, samplePost}