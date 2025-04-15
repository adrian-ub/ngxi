import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsSectionIcon],svg[radix-icons-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M2 5v5h11V5zm0-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-.5 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M4 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M3.5 14a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M6 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M5.5 14a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M8 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M7.5 14a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M10 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M9.5 14a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M12 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M11.5 14a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M14 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M13.5 14a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsSectionIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
