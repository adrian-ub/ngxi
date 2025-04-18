import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLoupeIcon],svg[zmdi-loupe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 109v86h85v42h-85v86h-43v-86h-85v-42h85v-86zM213 3q88 0 151 62.5T427 216v171q0 17-12.5 29.5T384 429H213q-88 0-150.5-62.5T0 216T62.5 65.5T213 3m.5 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50"></svg:path>`,
})
export class ZmdiLoupeIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
