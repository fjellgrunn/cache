# Usage Guide

Comprehensive usage guidance for `@fjell/cache`.

## Installation

```bash
npm install @fjell/cache
```

## API Highlights

- `createCache`, `CacheMap`, and cache-map implementations
- `TTLManager`, cache event exports, and stats managers
- `createOperations`, `createAggregator`, and registry utilities

## Quick Example

```ts
import { createCache, EnhancedMemoryCacheMap } from "@fjell/cache";

const cache = createCache({
  cacheMap: new EnhancedMemoryCacheMap(),
  ttl: { defaultTTL: 60_000 },
});

await cache.set("widget#1", { id: "widget#1", name: "Widget One" });
const widget = await cache.get("widget#1");
```

## Model Consumption Rules

1. Import from the package root (`@fjell/cache`) instead of deep-internal paths unless explicitly documented.
2. Keep usage aligned with exported public symbols listed in this guide.
3. Prefer explicit typing at package boundaries so generated code remains robust during upgrades.
4. Keep error handling deterministic and map infrastructure failures into domain-level errors.
5. Co-locate integration wrappers in your app so model-generated code has one canonical entry point.

## Best Practices

- Keep examples and abstractions consistent with existing Fjell package conventions.
- Favor composable wrappers over one-off inline integration logic.
- Add targeted tests around generated integration code paths.
