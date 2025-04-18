import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFrigateIcon],svg[icon-park-outline-frigate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11 12v12l13-5l13 5V12zm8-5v5h10V7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3"></svg:path><svg:path d="M12 44L6 26l18-7l18 7l-6 18"></svg:path><svg:path d="M4 42s4.663 2 8 2c5 0 7-2 12-2s7 2 12 2c3.337 0 8-2 8-2M24 19v23"></svg:path></svg:g>`,
})
export class IconParkOutlineFrigateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
