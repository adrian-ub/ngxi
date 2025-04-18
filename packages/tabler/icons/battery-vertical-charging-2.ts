import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBatteryVerticalCharging2Icon],svg[tabler-battery-vertical-charging-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7a2 2 0 0 1 2-2h.5c.276 0 .5-.224.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5s.224.5.5.5h.5a2 2 0 0 1 2 2v1M7 18a2 2 0 0 0 2 2h1m2-6h6v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm3 7v-3m-2-4v-2.5m4 2.5v-2.5"></svg:path>`,
})
export class TablerBatteryVerticalCharging2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
