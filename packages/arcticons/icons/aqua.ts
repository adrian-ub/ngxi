import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAquaIcon],svg[arcticons-aqua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.502 40.068L42.5 29.784L24 7.932L5.5 29.784l10.998 10.284z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.316 28.642c0-3.94-7.135-14.14-7.135-14.14s-7.136 10.2-7.136 14.14a7.136 7.136 0 0 0 14.27 0"></svg:path>`,
})
export class ArcticonsAquaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
