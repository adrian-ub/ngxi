import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBirdIcon],svg[arcticons-bird-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M33.716 21.768A10.52 10.52 0 0 0 24 15.258a10.52 10.52 0 0 0-9.716 6.51"></svg:path><svg:path d="M31.038 21.711a8.126 8.126 0 0 0-14.076 0"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.799 29.619a4.213 4.213 0 1 1-4.07-5.304l13.771-.043m-15.023 3.064h10.015m-24.291 2.283a4.213 4.213 0 1 0 4.07-5.304L4.5 24.272m15.023 3.064H9.507"></svg:path>`,
})
export class ArcticonsBirdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
