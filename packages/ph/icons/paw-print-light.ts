import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPawPrintLightIcon],svg[ph-paw-print-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 82a26 26 0 1 0 26 26a26 26 0 0 0-26-26m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14M70 108a26 26 0 1 0-26 26a26 26 0 0 0 26-26m-26 14a14 14 0 1 1 14-14a14 14 0 0 1-14 14m48-36a26 26 0 1 0-26-26a26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14m72 40a26 26 0 1 0-26-26a26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14m22.15 104.61a37.32 37.32 0 0 1-17.82-22.33a42 42 0 0 0-80.66 0a37.26 37.26 0 0 1-17.77 22.3A38 38 0 0 0 88 222a37.6 37.6 0 0 0 14.76-3a66.14 66.14 0 0 1 50.41 0a37.7 37.7 0 0 0 14.83 3a38 38 0 0 0 18.15-71.39M168 210a25.9 25.9 0 0 1-10.21-2.08a78.15 78.15 0 0 0-59.65 0a26 26 0 0 1-22.46-46.82a49.28 49.28 0 0 0 23.51-29.48a30 30 0 0 1 57.62 0a49.27 49.27 0 0 0 23.57 29.5A26 26 0 0 1 168 210"></svg:path>`,
})
export class PhPawPrintLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
