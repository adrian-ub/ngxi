import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerChevronDownIcon],svg[mdi-thermometer-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.41 12.17L14.24 9l-1.41 1.41L17.41 15L22 10.41L20.58 9M10 13V5c0-1.66-1.34-3-3-3S4 3.34 4 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1M7 4c.55 0 1 .45 1 1v3H6V5c0-.55.45-1 1-1"></svg:path>`,
})
export class MdiThermometerChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
