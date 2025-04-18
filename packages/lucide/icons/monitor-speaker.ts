import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorSpeakerIcon],svg[lucide-monitor-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.5 20H8m9-11h.01"></svg:path><svg:rect width="10" height="16" x="12" y="4" rx="2"></svg:rect><svg:path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"></svg:path><svg:circle cx="17" cy="15" r="1"></svg:circle></svg:g>`,
})
export class LucideMonitorSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
