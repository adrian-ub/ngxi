import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimpleflashlightIcon],svg[arcticons-simpleflashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5m0 7.44A14.06 14.06 0 1 0 38.06 24h0A14.07 14.07 0 0 0 24 9.94m0 7.44A6.62 6.62 0 1 0 30.62 24A6.63 6.63 0 0 0 24 17.38"></svg:path>`,
})
export class ArcticonsSimpleflashlightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
