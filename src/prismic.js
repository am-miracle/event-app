import Prismic from '@prismicio/client';

const API_ENDPOINT = "https://event-manager-app.prismic.io/api/v2";

const Client = Prismic.createClient(API_ENDPOINT);

export function getAllCategories(tag) {
    return Client.getByTag(tag)
}

export function getAllEvents() {
    return Client.getAllByType("event")
}