import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyxlIcon],svg[arcticons-myxl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.551 34.467l-14.598-16.99H8.122l7.298 8.495l-7.298 8.495h8.831l2.883-3.355l2.883 3.355z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.645 31.085v-3.094h7.021l4.082-6.645H28.645V10.243L22 14.324v9.027"></svg:path>`,
})
export class ArcticonsMyxlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
