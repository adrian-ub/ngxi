import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpeedtestIcon],svg[arcticons-speedtest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.29 2a22 22 0 0 1 15.27 37.57l-4.11-4.11a16.2 16.2 0 1 0-22.86-.05l-4.15 4.16A22 22 0 0 1 24.29 2m8.52 13.21L26.94 27h-5.88v-5.91Z"></svg:path>`,
})
export class ArcticonsSpeedtestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
