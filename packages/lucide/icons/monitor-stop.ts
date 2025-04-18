import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorStopIcon],svg[lucide-monitor-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 17v4m-4 0h8"></svg:path><svg:rect width="20" height="14" x="2" y="3" rx="2"></svg:rect><svg:rect width="6" height="6" x="9" y="7" rx="1"></svg:rect></svg:g>`,
})
export class LucideMonitorStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
