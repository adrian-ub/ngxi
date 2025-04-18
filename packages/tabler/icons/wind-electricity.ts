import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWindElectricityIcon],svg[tabler-wind-electricity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 7l-3 5h4l-3 5M3 16h4a2 2 0 1 1 0 4m-4-8h8a2 2 0 1 0 0-4M3 8h3a2 2 0 1 0 0-4"></svg:path>`,
})
export class TablerWindElectricityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
