import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLogiWebConnectIcon],svg[arcticons-logi-web-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.748 5.381l14.078 21.03h-9.9l10.826 16.208L45.5 24.002L34.748 5.383z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.248 5.381L2.5 23.998l10.752 18.619l15 .002L14.174 21.59h9.9z"></svg:path>`,
})
export class ArcticonsLogiWebConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
