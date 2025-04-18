import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorUpIcon],svg[lucide-monitor-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m9 10l3-3l3 3m-3 3V7"></svg:path><svg:rect width="20" height="14" x="2" y="3" rx="2"></svg:rect><svg:path d="M12 17v4m-4 0h8"></svg:path></svg:g>`,
})
export class LucideMonitorUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
