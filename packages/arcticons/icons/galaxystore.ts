import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGalaxystoreIcon],svg[arcticons-galaxystore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.766 16.096l1.949 19.208a8.003 8.003 0 0 0 7.962 7.196h14.646a8.003 8.003 0 0 0 7.962-7.196l1.949-19.208Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.071 16.096V13.43a7.929 7.929 0 0 1 15.858 0v2.667"></svg:path>`,
})
export class ArcticonsGalaxystoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
