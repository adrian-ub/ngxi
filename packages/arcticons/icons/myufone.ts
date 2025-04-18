import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyufoneIcon],svg[arcticons-myufone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.308 45.5H2.5V24.692A22.257 22.257 0 0 1 24.692 2.5h1.384A19.48 19.48 0 0 1 45.5 21.924v1.384A22.257 22.257 0 0 1 23.308 45.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.61 16v10.388a5.627 5.627 0 0 1-5.61 5.61h0a5.627 5.627 0 0 1-5.61-5.61V16m11.22 8.283V32"></svg:path>`,
})
export class ArcticonsMyufoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
