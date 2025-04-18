import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFogIcon],svg[tdesign-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 4C8.634 4 6.7 5.916 6.7 8.2q0 .394.073.765l.229 1.19H5.79C4.839 10.155 4 11.018 4 12v1H2v-1c0-1.657 1.124-3.185 2.701-3.68L4.7 8.2C4.7 4.74 7.601 2 11.1 2c.546 0 1.078.066 1.586.192c2.147.53 3.88 2.12 4.533 4.187a5.6 5.6 0 0 1 2.01.657C20.942 7.986 22 10.086 22 12v1h-2v-1c0-1.298-.756-2.669-1.741-3.216a3.6 3.6 0 0 0-1.818-.45l-.854.013l-.147-.842c-.282-1.62-1.55-2.956-3.234-3.371A4.6 4.6 0 0 0 11.1 4M2 14h6v2H2zm8 0h12v2H10zm7 4h5v2h-5zM2 20v-2h13v2z"></svg:path>`,
})
export class TdesignFogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
