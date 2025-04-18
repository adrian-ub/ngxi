import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLuxGoldIconPackIcon],svg[arcticons-lux-gold-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 5.5a5 5 0 0 1 5 5v27a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5v-27a5 5 0 0 1 5-5m8.5 32v-27c0-2.77 2.23-5 5-5s5 2.23 5 5v22h8.5c2.77 0 5 2.23 5 5s-2.23 5-5 5H24c-2.77 0-5-2.23-5-5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.5 5.5a5 5 0 0 1 5 5V24a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5V10.5a5 5 0 0 1 5-5"></svg:path>`,
})
export class ArcticonsLuxGoldIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
