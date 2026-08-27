import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import CollectionPage from './collection';
import { collections } from '../../data';

const testCollection = collections.find(
  (c) => !c.hidden && c.icons && c.icons.length > 10,
)!;

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

    const info = fixture.componentInstance.collectionInfo();
    expect(info).toBeTruthy();
    expect(info!.id).toBe(testCollection.id);
    expect(info!.name).toBe(testCollection.name);
  });

  it('should return null for an unknown collection', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', 'nonexistent-collection');
    fixture.detectChanges();

    expect(fixture.componentInstance.collectionInfo()).toBeNull();
  });

  it('should open and close the icon dialog', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedIcon()).toBeNull();

    fixture.componentInstance.openDialog('home');
    expect(fixture.componentInstance.selectedIcon()).toBe('home');

    fixture.componentInstance.selectedIcon.set(null);
    expect(fixture.componentInstance.selectedIcon()).toBeNull();
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
