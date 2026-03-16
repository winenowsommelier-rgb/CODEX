CREATE TABLE countries (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name_en TEXT NOT NULL,
  name_th TEXT NOT NULL,
  description_en TEXT NOT NULL,
  description_th TEXT NOT NULL,
  center GEOGRAPHY(POINT, 4326)
);

CREATE TABLE regions (
  id TEXT PRIMARY KEY,
  country_id TEXT NOT NULL REFERENCES countries(id),
  slug TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_th TEXT NOT NULL,
  description_en TEXT NOT NULL,
  description_th TEXT NOT NULL,
  geojson_polygon JSONB,
  center GEOGRAPHY(POINT, 4326),
  UNIQUE(country_id, slug)
);

CREATE TABLE subregions (
  id TEXT PRIMARY KEY,
  region_id TEXT NOT NULL REFERENCES regions(id),
  slug TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_th TEXT NOT NULL,
  description_en TEXT NOT NULL,
  description_th TEXT NOT NULL,
  geojson_polygon JSONB,
  center GEOGRAPHY(POINT, 4326),
  UNIQUE(region_id, slug)
);

CREATE TABLE appellations (
  id TEXT PRIMARY KEY,
  subregion_id TEXT NOT NULL REFERENCES subregions(id),
  slug TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_th TEXT NOT NULL,
  description_en TEXT NOT NULL,
  description_th TEXT NOT NULL,
  classification TEXT,
  grapes TEXT[],
  wine_style TEXT,
  geojson_polygon JSONB,
  center GEOGRAPHY(POINT, 4326),
  UNIQUE(subregion_id, slug)
);

CREATE TABLE products (
  sku TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  image_url TEXT,
  price_thb NUMERIC(10, 2) NOT NULL,
  ecommerce_url TEXT NOT NULL
);

CREATE TABLE content_product_map (
  content_id TEXT NOT NULL,
  sku TEXT NOT NULL REFERENCES products(sku),
  priority INT NOT NULL DEFAULT 100,
  PRIMARY KEY(content_id, sku)
);

CREATE INDEX idx_regions_country ON regions(country_id);
CREATE INDEX idx_subregions_region ON subregions(region_id);
CREATE INDEX idx_appellations_subregion ON appellations(subregion_id);
CREATE INDEX idx_content_product_map_priority ON content_product_map(content_id, priority);
