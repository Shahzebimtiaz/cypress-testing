const baseUrl = require("../../fixtures/apiUrl.json");

describe('GET all Posts API Testing with cypress', () => {
    it('Should get the Posts', () =>{
        cy.request({
            method: 'GET',
            url: baseUrl.baseUrl+baseUrl.getPosts
        }).then(response=>{
            console.log("Response:");
            console.log(response);
            expect(response.status).to.eq(200);
        });
    });
});
describe('GET Post with ID API Testing with cypress', () => {
    it('Should get the Posts with Id 1', () =>{
        cy.request({
            method: 'GET',
            url: baseUrl.baseUrl+baseUrl.getPosts+baseUrl.get1Post
        }).then(response=>{
            console.log("Response:");
            console.log(response);
            expect(response.status).to.eq(200);
            expect(response.body, 'Response body').to.deep.equal({
                userId: 1,
                id: 1,
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
            });
        });
    });
});
describe('Post API Testing with cypress', () => {
    it('Shoud create a resource', () =>{
        var payload = {
            "title": "cypress",
            "body": "cypress",
            "userId": "1"
        }
        cy.request('POST', baseUrl.baseUrl+baseUrl.getPosts, payload).then((response)=>{
            expect(response.status).equal(201);
            expect(response.body.id).equal(101);
            expect(response.body.title).equal(payload.title);
            expect(response.body.body).equal(payload.body);
            expect(response.body.userId).equal(payload.userId);
        });
    });
});
describe('Put API Testing with cypress', () => {
    it('Shoud update a resource', () =>{
        var payload = {
            "id": "1",
            "title": "cypress update",
            "body": "cypress update",
            "userId": "1"
        }
        cy.request('PUT', baseUrl.baseUrl+baseUrl.getPosts+baseUrl.get1Post, payload).then((response)=>{
            expect(response.status).equal(200);
            expect(response.body.id).equal(1);
            expect(response.body.title).equal(payload.title);
            expect(response.body.body).equal(payload.body);
            expect(response.body.userId).equal(payload.userId);
        });
    });
});
describe('Delete API Testing with cypress', () => {
    it('Should delete a resource', () =>{
        cy.request('PUT', baseUrl.baseUrl+baseUrl.getPosts+baseUrl.get1Post).then((response)=>{
            expect(response.status).equal(200);
        });
    });
});