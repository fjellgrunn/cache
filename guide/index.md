# @fjell/cache - Agentic Guide

## Purpose

Caching primitives and cache-map implementations for Fjell data workflows.

This guide is optimized for AI-assisted code generation and integration workflows.

## Documentation

- **[Usage Guide](./usage.md)** - API-oriented usage patterns and model-safe examples
- **[Integration Guide](./integration.md)** - Architecture placement, composition rules, and implementation guidance

## Key Capabilities

- Provides memory, localStorage, sessionStorage, and IndexedDB cache maps
- Supports TTL management, cache stats, events, and operation wrappers
- Includes registry/aggregator helpers for composing cache behavior

## Installation

```bash
npm install @fjell/cache
```

## Public API Highlights

- `createCache`, `CacheMap`, and cache-map implementations
- `TTLManager`, cache event exports, and stats managers
- `createOperations`, `createAggregator`, and registry utilities
