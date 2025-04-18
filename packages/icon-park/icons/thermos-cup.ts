import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkThermosCupIcon],svg[icon-park-thermos-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M10 31C10 31 10.0714 37 24 37C37.9286 37 38 31 38 31V15H24H10V31Z"></svg:path><svg:path stroke-linecap="round" d="M24 4V10"></svg:path><svg:path stroke-linecap="round" d="M16 5V9"></svg:path><svg:path stroke-linecap="round" d="M32 5V9"></svg:path><svg:path stroke-linecap="round" d="M14 36V41C14 42.1046 14.8954 43 16 43H32C33.1046 43 34 42.1046 34 41V36"></svg:path></svg:g>`,
})
export class IconParkThermosCupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
