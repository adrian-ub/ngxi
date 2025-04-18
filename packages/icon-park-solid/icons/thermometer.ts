import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThermometerIcon],svg[icon-park-solid-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSThermometer0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M18 26V10a6 6 0 0 1 12 0v16a9.99 9.99 0 0 1 4 8c0 5.523-4.477 10-10 10s-10-4.477-10-10a9.99 9.99 0 0 1 4-8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 17v13"></svg:path><svg:path fill="#000" stroke="#000" d="M24 38a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSThermometer0)"></svg:path>`,
})
export class IconParkSolidThermometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
