import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBatteryWarningIcon],svg[lucide-battery-warning-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 17h.01M10 7v6m4-6h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2m8-6v2M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></svg:path>`,
})
export class LucideBatteryWarningIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
