import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBatteryPlusIcon],svg[lucide-battery-plus-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m3.5-8H16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5m8.5-6v2M6.5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5m.5 5h6"></svg:path>`,
})
export class LucideBatteryPlusIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
