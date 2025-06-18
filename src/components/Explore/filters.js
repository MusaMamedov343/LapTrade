export function filter(laptops, query, categories, brands, maxPrice) {
  const filteredLaptops = laptops.filter((laptop) => {
    const matchesSearch = query
      ? laptop.name.toLowerCase().includes(query.toLowerCase())
      : true;
    const matchesCategory = categories.length
      ? categories.includes(laptop.category.toLowerCase())
      : true;
    const matchesBrand = brands.length
      ? brands.includes(laptop.brand.toLowerCase())
      : true;
    const matchesPrice = laptop.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });
  return filteredLaptops;
}
