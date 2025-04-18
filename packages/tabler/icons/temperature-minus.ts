import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTemperatureMinusIcon],svg[tabler-temperature-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13.5a4 4 0 1 0 4 0V5a2 2 0 0 0-4 0zM8 9h4m4 0h6"></svg:path>`,
})
export class TablerTemperatureMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
