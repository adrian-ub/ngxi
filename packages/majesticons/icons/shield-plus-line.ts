import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsShieldPlusLineIcon],svg[majesticons-shield-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14c0 4-7 7-7 7s-7-3-7-7V5c1.5.167 5 0 7-2c2 2 5.5 2.167 7 2zm-7-5v3m0 3v-3m0 0h3m-3 0H9"></svg:path>`,
})
export class MajesticonsShieldPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
