import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoMobilePghIcon],svg[arcticons-go-mobile-pgh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.496 16.281L24 10.64L4.504 16.281L24 21.923z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.165 20.146L43.5 24.002L30.165 27.87L24 29.648l-6.165-1.778L4.5 24.002l13.335-3.856"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.835 27.87h-.012L4.5 31.726L24 37.36l19.5-5.634l-13.323-3.856h-.012"></svg:path>`,
})
export class ArcticonsGoMobilePghIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
