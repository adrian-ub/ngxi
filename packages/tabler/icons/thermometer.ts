import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerThermometerIcon],svg[tabler-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 5a2.83 2.83 0 0 1 0 4l-8 8H7v-4l8-8a2.83 2.83 0 0 1 4 0m-3 2l-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5M7 17l-3 3"></svg:path>`,
})
export class TablerThermometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
