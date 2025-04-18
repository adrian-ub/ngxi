import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberTwoLightIcon],svg[ph-number-two-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 208a6 6 0 0 1-6 6H88a6 6 0 0 1-4.8-9.6l72-95.92a34 34 0 0 0-31.88-54.14a34.1 34.1 0 0 0-26.49 20.07a6 6 0 0 1-11-4.81a46.5 46.5 0 0 1 5.43-9.28a46 46 0 0 1 73.48 55.37L100 202h68a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhNumberTwoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
