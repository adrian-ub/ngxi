import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShopbackIcon],svg[arcticons-shopback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.668 17.41L30.075 4.5L16.307 17.817c-1.928 1.864-1.325 3.453 1.584 3.453h10.57c3.646 0 3.089 1.585.634 3.771l-4.234 3.772l5.214-.9c2.873-.495 4.007 1.735.777 4.15L15.558 43.5l6.164-18.604"></svg:path>`,
})
export class ArcticonsShopbackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
