import Prismic from '@prismicio/client';

const API_ENDPOINT = process.env.ASTRO_PUBLIC_PRISMIC_URL;

const Client = Prismic.createClient(API_ENDPOINT);

export function getAllCategories(tag) {
    return Client.getByTag(tag)
}

export function getAllEvents() {
    return Client.getAllByType("event")
}