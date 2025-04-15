import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsStretchVerticallyIcon],svg[radix-icons-stretch-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12A.5.5 0 0 1 1 .5M9 14V1H6v13H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsStretchVerticallyIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
