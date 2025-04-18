import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBatteryVertical1Icon],svg[tabler-battery-vertical-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7a2 2 0 0 1 2-2h.5a.5.5 0 0 0 .5-.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2m3-1h4"></svg:path>`,
})
export class TablerBatteryVertical1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
