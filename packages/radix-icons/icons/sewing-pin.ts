import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsSewingPinIcon],svg[radix-icons-sewing-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m2 2.45a2.5 2.5 0 1 0-1 0v7.55a.5.5 0 0 0 1 0z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsSewingPinIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
