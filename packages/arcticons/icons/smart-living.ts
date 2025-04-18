import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartLivingIcon],svg[arcticons-smart-living-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.02 26.218l-3.325 2.747V43.5l5.414-4.54h8.986V15.244L24 4.5L7.905 15.244V38.96h10.97"></svg:path>`,
})
export class ArcticonsSmartLivingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
