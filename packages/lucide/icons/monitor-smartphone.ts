import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorSmartphoneIcon],svg[lucide-monitor-smartphone-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8m-2 4v-3.96v3.15M7 19h5"></svg:path><svg:rect width="6" height="10" x="16" y="12" rx="2"></svg:rect></svg:g>`,
})
export class LucideMonitorSmartphoneIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
