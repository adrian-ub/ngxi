import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEarfunIcon],svg[arcticons-earfun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 5.5h5.368c2.263 0 4.1 1.838 4.1 4.1v3.326H6.5zm25.532 0h5.367A4.103 4.103 0 0 1 41.5 9.6v3.326h-9.468zm0 12.947V36.9H20.77a4.8 4.8 0 0 1-4.802-4.802v-13.65H6.5v11.169c0 7.115 5.768 12.883 12.883 12.883H41.5V18.447z"></svg:path>`,
})
export class ArcticonsEarfunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
