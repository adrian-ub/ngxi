import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsAngleIcon],svg[radix-icons-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.891 2.194a.5.5 0 0 1 .115.697L2.474 12H13.5a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.406-.791l7.1-9.9a.5.5 0 0 1 .697-.115M11.1 6.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M10.4 4a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.7 4.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m1.3 1.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsAngleIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
