import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneThermometerIcon],svg[icon-park-twotone-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTThermometer0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M18 26V10a6 6 0 0 1 12 0v16a9.99 9.99 0 0 1 4 8c0 5.523-4.477 10-10 10s-10-4.477-10-10a9.99 9.99 0 0 1 4-8Z"></svg:path><svg:path stroke-linecap="round" d="M24 17v13"></svg:path><svg:path fill="#555" d="M24 38a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTThermometer0)"></svg:path>`,
})
export class IconParkTwotoneThermometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
