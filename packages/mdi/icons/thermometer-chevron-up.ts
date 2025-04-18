import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerChevronUpIcon],svg[mdi-thermometer-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.41 11.83L20.58 15L22 13.59L17.41 9l-4.59 4.59L14.24 15zM10 13V5c0-1.66-1.34-3-3-3S4 3.34 4 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1M7 4c.55 0 1 .45 1 1v3H6V5c0-.55.45-1 1-1"></svg:path>`,
})
export class MdiThermometerChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
