import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDelistIcon],svg[arcticons-delist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.284 9.855l8.89 5.176L35.56 4.5M12 14.228l10.797 10.441l8.538-4.64M36 23.509L25.438 33.683l-9.154-5.087M12 33.148L22.709 43.5l8.626-5.176"></svg:path>`,
})
export class ArcticonsDelistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
