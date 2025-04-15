import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsAlignBottomIcon],svg[radix-icons-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H9z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsAlignBottomIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
