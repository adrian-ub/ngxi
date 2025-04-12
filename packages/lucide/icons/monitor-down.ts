import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorDownIcon],svg[lucide-monitor-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 13V7m3 3l-3 3l-3-3"></svg:path><svg:rect width="20" height="14" x="2" y="3" rx="2"></svg:rect><svg:path d="M12 17v4m-4 0h8"></svg:path></svg:g>`
})
export class LucideMonitorDownIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
