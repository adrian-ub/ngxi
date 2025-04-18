import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsExodusIcon],svg[arcticons-exodus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.96 5.5L24 21.46L8.04 5.5M42.5 39.96L26.54 24L42.5 8.04M8.04 42.5L24 26.54L39.96 42.5M5.5 8.04L21.46 24L5.5 39.96"></svg:path>`,
})
export class ArcticonsExodusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
