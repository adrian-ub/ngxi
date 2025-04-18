import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBatteryVerticalExclamationIcon],svg[tabler-battery-vertical-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12V7a2 2 0 0 0-2-2h-.5c-.276 0-.5-.224-.5-.5s-.224-.5-.5-.5h-3c-.276 0-.5.224-.5.5s-.224.5-.5.5H9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h6m4-4v3m0 3v.01"></svg:path>`,
})
export class TablerBatteryVerticalExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
