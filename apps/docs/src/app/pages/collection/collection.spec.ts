import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import CollectionPage from './collection';
import { collections, type CollectionInfo } from '../../data';

const testCollection = collections.find(
  (c) => !c.hidden && (c.total ?? 0) > 10,
)!;

/**
 * Exposes CollectionPage's protected members for white-box assertions without
 * weakening the component's encapsulation. Angular signals make a
 * `WritableSignal` both callable (`selectedIcon()`) and settable
 * (`selectedIcon.set(...)`), so the shape below mirrors exactly that.
 */
type CollectionPageHarness = {
  collectionInfo: () => CollectionInfo | null;
  selectedIcon: {
    (): string | null;
    set: (value: string | null) => void;
  };
  openDialog: (iconName: string) => void;
};

function harness(fixture: ComponentFixture<CollectionPage>): CollectionPageHarness {
  return fixture.componentInstance as unknown as CollectionPageHarness;
}

function configureTestBed() {
  TestBed.configureTestingModule({
    imports: [CollectionPage],
    providers: [
      provideRouter([], withComponentInputBinding()),
      provideLocationMocks(),
    ],
  });
  TestBed.compileComponents();
}

describe('CollectionPage', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create the component', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should resolve collection info from the static collections array', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    const info = harness(fixture).collectionInfo();
    expect(info).toBeTruthy();
    expect(info!.id).toBe(testCollection.id);
    expect(info!.name).toBe(testCollection.name);
  });

  it('should return null for an unknown collection', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', 'nonexistent-collection');
    fixture.detectChanges();

    expect(harness(fixture).collectionInfo()).toBeNull();
  });

  it('should open and close the icon dialog', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    const instance = harness(fixture);
    expect(instance.selectedIcon()).toBeNull();

    instance.openDialog('home');
    expect(instance.selectedIcon()).toBe('home');

    instance.selectedIcon.set(null);
    expect(instance.selectedIcon()).toBeNull();
  });

  it('should render the collection name', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(testCollection.name);
  });

  it('should render sidebar with collection links', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const aside = compiled.querySelector('aside');
    expect(aside).not.toBeNull();
    const links = aside!.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(0);
  });

  it('should highlight active collection in sidebar', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const activeLink = compiled.querySelector('aside a.bg-accent');
    expect(activeLink).not.toBeNull();
    expect(activeLink!.textContent).toContain(testCollection.name);
  });

  it('should render install pill with correct package name', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(
      `pnpm add @ngxi/${testCollection.id}`,
    );
  });
});
