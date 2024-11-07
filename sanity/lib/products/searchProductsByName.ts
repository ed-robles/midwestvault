import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (searchParam: string) => {
  const PRODCUT_SEARCH_QUERY = defineQuery(`
        *[
            _type == "product" 
            && name match $searchParam
        ] | order(name asc)
    `);

  try {
    // use sanityFetch to send the query and pass the search parameter with a wildcard
    const products = await sanityFetch({
      query: PRODCUT_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}*`, // append wildcard for partial match
      },
    });

    return products.data || [];
  } catch (error) {
    console.error("Error fetching products by name", error);
    return [];
  }
};
