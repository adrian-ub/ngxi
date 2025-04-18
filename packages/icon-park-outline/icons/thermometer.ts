import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineThermometerIcon],svg[icon-park-outline-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 26V10a6 6 0 0 1 12 0v16a9.99 9.99 0 0 1 4 8c0 5.523-4.477 10-10 10s-10-4.477-10-10a9.99 9.99 0 0 1 4-8Z"></svg:path><svg:path stroke-linecap="round" d="M24 17v13"></svg:path><svg:path d="M24 38a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g>`,
})
export class IconParkOutlineThermometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
