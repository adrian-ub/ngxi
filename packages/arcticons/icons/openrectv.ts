import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpenrectvIcon],svg[arcticons-openrectv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.201 23.134L21.2 17.357a1 1 0 0 0-1.5.866v11.554a1 1 0 0 0 1.5.866l10-5.777a1 1 0 0 0 .001-1.732"></svg:path><svg:circle cx="24" cy="24" r="14.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5a21.477 21.477 0 1 1-6.117.883L24 9.5Z"></svg:path>`,
})
export class ArcticonsOpenrectvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
