import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac10SolidIcon],svg[streamline-zodiac-10-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.138.38A1 1 0 0 1 2.543.215A8.3 8.3 0 0 1 5.666 6h2.668A8.3 8.3 0 0 1 11.457.215a1 1 0 1 1 1.24 1.57A6.3 6.3 0 0 0 10.344 6H13a1 1 0 1 1 0 2h-2.656a6.3 6.3 0 0 0 2.353 4.215a1 1 0 1 1-1.24 1.57A8.3 8.3 0 0 1 8.334 8H5.666a8.3 8.3 0 0 1-3.123 5.785a1 1 0 1 1-1.24-1.57A6.3 6.3 0 0 0 3.657 8H1a1 1 0 0 1 0-2h2.656a6.3 6.3 0 0 0-2.352-4.215A1 1 0 0 1 1.138.38" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineZodiac10SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
