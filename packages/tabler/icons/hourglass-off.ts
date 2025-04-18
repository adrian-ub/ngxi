import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHourglassOffIcon],svg[tabler-hourglass-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 18v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a6 6 0 0 1 6-6M6 6a6 6 0 0 0 6 6m3.13-.88A6 6 0 0 0 18 6V4a1 1 0 0 0-1-1H7M3 3l18 18"></svg:path>`,
})
export class TablerHourglassOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
