import {
  Injectable,
  Type,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';

type ModuleExports = Record<string, Type<unknown>>;

const PACKAGE_MAP: Record<string, () => Promise<ModuleExports>> = {
  '@ngxi/lucide': () => import('@ngxi/lucide') as Promise<ModuleExports>,
};

@Injectable({ providedIn: 'root' })
export class IconLoaderService {
  private cache = new Map<string, Promise<ModuleExports>>();

  async loadLibrary(importFrom: string): Promise<ModuleExports> {
    if (!this.cache.has(importFrom)) {
      const loader = PACKAGE_MAP[importFrom];
      const promise = loader
        ? loader()
        : (import(/* @vite-ignore */ importFrom) as Promise<ModuleExports>);
      this.cache.set(importFrom, promise);
    }
    return this.cache.get(importFrom)!;
  }

  async getComponentClass(
    importFrom: string,
    className: string,
  ): Promise<Type<unknown> | null> {
    try {
      const lib = await this.loadLibrary(importFrom);
      return lib[className] ?? null;
    } catch {
      return null;
    }
  }

  async createIconComponent(
    vcr: ViewContainerRef,
    importFrom: string,
    className: string,
    inputs?: Record<string, unknown>,
  ): Promise<ComponentRef<unknown> | null> {
    const ComponentClass = await this.getComponentClass(importFrom, className);
    if (!ComponentClass) return null;

    const ref = vcr.createComponent(ComponentClass);
    if (inputs) {
      Object.entries(inputs).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          ref.setInput(key, value);
        }
      });
    }
    return ref;
  }
}
