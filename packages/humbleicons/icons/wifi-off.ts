import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsWifiOffIcon],svg[humbleicons-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.5 17.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m4 4l16 16M9 5.336c4.143-.94 8.643.094 12 3.101m-8 .615a9.46 9.46 0 0 1 5.333 2.367m-10 2.981a5.5 5.5 0 0 1 4.345-1.358M3 8.437a13.5 13.5 0 0 1 3.206-2.134m-.54 5.116A9.45 9.45 0 0 1 9 9.484m3.5 8.016a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"></svg:path></svg:g>`,
})
export class HumbleiconsWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
