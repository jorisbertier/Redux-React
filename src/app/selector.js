export const getProductList = (state) => state?.list;

export const getTotalOrder = (state) => getProductList(state).reduce((prev, cur) =>
cur.prive + prev, 0)

export const isVoucherAvailable = (state) => getProductList(state).find((product) => 
product.title === "Super Crémeux")