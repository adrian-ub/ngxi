import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBatteryExclamationIcon],svg[tabler-battery-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17h8a2 2 0 0 0 2-2v-.5c0-.276.224-.5.5-.5s.5-.224.5-.5v-3c0-.276-.224-.5-.5-.5s-.5-.224-.5-.5V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3m1 4v3m0 3v.01"></svg:path>`,
})
export class TablerBatteryExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
