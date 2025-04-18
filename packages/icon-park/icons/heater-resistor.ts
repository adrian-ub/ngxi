import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHeaterResistorIcon],svg[icon-park-heater-resistor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="12" x="9.858" y="29.657" fill="#2F88FF" stroke="#000" rx="2" transform="rotate(-45 9.858 29.657)"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M7.0293 40.9707L14.1004 33.8996"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33.9014 14.1006L40.9724 7.02952"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14.8076 24.707L23.2929 33.1923"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19.7578 19.7573L28.2431 28.2426"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24.707 14.8076L33.1923 23.2929"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12.6865 26.8286L26.8287 12.6865"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M21.1719 35.314L35.314 21.1718"></svg:path></svg:g>`,
})
export class IconParkHeaterResistorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
