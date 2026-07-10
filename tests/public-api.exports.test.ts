import { describe, expect, it } from 'vitest';
import {
  createOptions,
  TwoLayerCacheMap,
  TwoLayerFactory,
} from '../src/index';
import type { TwoLayerCacheOptions, TwoLayerConfig } from '../src/index';

describe('public API exports', () => {
  it('exports TwoLayerFactory and TwoLayerCacheMap as documented', () => {
    expect(TwoLayerFactory).toBeDefined();
    expect(typeof TwoLayerFactory.create).toBe('function');
    expect(typeof TwoLayerFactory.createMemoryTwoLayer).toBe('function');
    expect(TwoLayerCacheMap).toBeDefined();
  });

  it('keeps createOptions available alongside two-layer factory surface', () => {
    expect(typeof createOptions).toBe('function');
  });

  it('exposes TwoLayerCacheOptions and TwoLayerConfig as types', () => {
    // Compile-time smoke: assign typed values so the public type exports stay wired.
    const options: TwoLayerCacheOptions = { itemTTL: 60, queryTTL: 30, facetTTL: 10 };
    const config: TwoLayerConfig = {
      enabled: true,
      itemLayer: { type: 'memory' },
      options,
    };
    expect(config.enabled).toBe(true);
    expect(options.itemTTL).toBe(60);
  });
});
