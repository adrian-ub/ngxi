import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsStopwatchIcon],svg[radix-icons-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5.5A.5.5 0 0 1 6 0h3a.5.5 0 0 1 0 1H8v1.12a6.36 6.36 0 0 1 2.992 1.016a1 1 0 0 1 .066-.078l.8-.8a.625.625 0 0 1 .884.884l-.775.775A6.4 6.4 0 1 1 7 2.119V1H6a.5.5 0 0 1-.5-.5m-3.4 8a5.4 5.4 0 1 1 10.8 0a5.4 5.4 0 0 1-10.8 0m5.9-4a.5.5 0 0 0-1 0v5a.5.5 0 1 0 1 0z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsStopwatchIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
