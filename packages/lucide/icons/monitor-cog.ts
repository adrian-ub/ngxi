import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorCogIcon],svg[lucide-monitor-cog-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 17v4m3.2-16.1l-.9-.4m.9 2.6l-.9.4m2.6-4.3l-.4-.9m.4 6.5l-.4.9m3-7.4l-.4.9m.4 6.5l-.4-.9m2.6-4.3l-.9.4m.9 2.6l-.9-.4M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7M8 21h8"></svg:path><svg:circle cx="18" cy="6" r="3"></svg:circle></svg:g>`,
})
export class LucideMonitorCogIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
