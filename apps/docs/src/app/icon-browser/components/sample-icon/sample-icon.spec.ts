import { TestBed } from '@angular/core/testing';
import { trustIconBody } from '../../../services/trusted-icon-body';
import { SampleIcon } from './sample-icon';

describe('SampleIcon', () => {
  it('renders a trusted sample body inside an svg with the set viewBox', async () => {
    await TestBed.configureTestingModule({
      imports: [SampleIcon],
    }).compileComponents();

    const fixture = TestBed.createComponent(SampleIcon);
    fixture.componentRef.setInput(
      'body',
      trustIconBody('<path d="M12 2L2 7l10 5z" />'),
    );
    fixture.componentRef.setInput('viewBox', '0 0 32 32');
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg') as SVGElement;
    expect(svg).not.toBeNull();
    expect(svg.getAttribute('viewBox')).toBe('0 0 32 32');
    expect(svg.querySelector('path')).not.toBeNull();
  });

  it('renders an empty svg while no body is available', async () => {
    await TestBed.configureTestingModule({
      imports: [SampleIcon],
    }).compileComponents();

    const fixture = TestBed.createComponent(SampleIcon);
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg') as SVGElement;
    expect(svg).not.toBeNull();
    expect(svg.innerHTML).toBe('');
  });
});
