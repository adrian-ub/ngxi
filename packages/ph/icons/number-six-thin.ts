import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSixThinIcon],svg[ph-number-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 108a51.66 51.66 0 0 0-24.74 6.27L139.49 50a4 4 0 0 0-7-3.92L83 134.05A52 52 0 1 0 128 108m0 96a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhNumberSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
