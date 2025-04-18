import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOverdropIcon],svg[arcticons-overdrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.514 23.838a4.965 4.965 0 1 1-7.026 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.438 15.923a16.165 16.165 0 1 1-22.876 0m.001 0L24.001 4.5L35.44 15.923m-14.953 7.915l11.338-11.322m-4.311 11.322L24 20.33"></svg:path>`,
})
export class ArcticonsOverdropIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
