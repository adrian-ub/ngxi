import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorOffIcon],svg[lucide-monitor-off-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2m19 12V5a2 2 0 0 0-2-2H9M8 21h8m-4-4v4M2 2l20 20"></svg:path>`,
})
export class LucideMonitorOffIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
