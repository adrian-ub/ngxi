import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVacuumCleanerIcon],svg[icon-park-solid-vacuum-cleaner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M26 22.5V10c0-3 2-6 6-6s6 3 6 6v24"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.75 34h10.5l.75 6H32z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 40h15.886c.063 0 .114-.05.114-.114V23.255C26 15.935 20.066 10 12.745 10v0A5.745 5.745 0 0 0 7 15.745V29"></svg:path><svg:circle cx="10" cy="34" r="6" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 10v19"></svg:path></svg:g>`,
})
export class IconParkSolidVacuumCleanerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
