import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStampThinIcon],svg[ph-stamp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 224a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m0-80v40a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h61.37L92.63 53.87A28 28 0 0 1 120 20h16a28 28 0 0 1 27.38 33.87L146.63 132H208a12 12 0 0 1 12 12m-102.45-12h20.9l17.1-79.81A20 20 0 0 0 136 28h-16a20 20 0 0 0-19.56 24.19ZM212 144a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhStampThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
