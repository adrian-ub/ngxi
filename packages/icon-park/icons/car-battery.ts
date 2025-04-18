import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCarBatteryIcon],svg[icon-park-car-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M43 12H3V42H43V12Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M11 6H3V12H11V6Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M43 6H35V12H43V6Z"></svg:path><svg:path stroke="#fff" d="M9 21H15"></svg:path><svg:path stroke="#fff" d="M31 21H37"></svg:path><svg:path stroke="#fff" d="M12 18V24"></svg:path></svg:g>`,
})
export class IconParkCarBatteryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
