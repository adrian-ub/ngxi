import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGaugeIcon],svg[lucide-gauge-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0"></svg:path>`,
})
export class LucideGaugeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
