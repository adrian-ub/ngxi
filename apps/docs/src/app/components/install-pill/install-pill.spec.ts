import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { InstallPill } from './install-pill';

describe('InstallPill', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  function createPill(): {
    fixture: import('@angular/core/testing').ComponentFixture<InstallPill>;
  } {
    TestBed.configureTestingModule({ imports: [InstallPill] });
    const fixture = TestBed.createComponent(InstallPill);
    fixture.detectChanges();
    return { fixture };
  }

  it('renders the install command from the package name', () => {
    const { fixture } = createPill();
    fixture.componentRef.setInput('packageName', '@ngxi/lucide');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain(
      'pnpm add @ngxi/lucide',
    );
  });

  it('falls back to the placeholder package when empty', () => {
    const { fixture } = createPill();
    expect(fixture.nativeElement.textContent).toContain(
      'pnpm add @ngxi/<collection>',
    );
  });

  it('shows the copied state and resets it after 1500ms', () => {
    const { fixture } = createPill();
    fixture.componentRef.setInput('packageName', '@ngxi/lucide');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('polyline')).toBeNull();
    fixture.componentInstance.onInstallCopied();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('polyline')).not.toBeNull();
    vi.advanceTimersByTime(1499);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('polyline')).not.toBeNull();
    vi.advanceTimersByTime(1);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('polyline')).toBeNull();
  });
});
