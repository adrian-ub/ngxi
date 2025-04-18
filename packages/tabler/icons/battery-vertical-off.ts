import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBatteryVerticalOffIcon],svg[tabler-battery-vertical-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18m-4-8V7a2 2 0 0 0-2-2h-.5a.5.5 0 0 1-.5-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5a.5.5 0 0 1-.5.5H9M7 7v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1"></svg:path>`,
})
export class TablerBatteryVerticalOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
