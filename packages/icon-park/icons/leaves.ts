import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLeavesIcon],svg[icon-park-leaves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 43C31 43 18 44 11 36C4 28 4 4 4 4C4 4 28 3 36 9C44 15 42 32 42 32"></svg:path><svg:path d="M44 44C44 44 32.8207 35.5515 26 28C19.1793 20.4485 16 13 16 13"></svg:path><svg:path d="M26 28L27 15"></svg:path><svg:path d="M26 28L16 27"></svg:path></svg:g>`,
})
export class IconParkLeavesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
