import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHockeyMaskIcon],svg[lucide-lab-hockey-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 12a10 10 0 1 0 20 0c0-4.1-.4-6.6-1.9-8.1S16.1 2 12 2s-6.6.4-8.1 1.9S2 7.9 2 12m10-6h.01"></svg:path><svg:circle cx="8" cy="10.5" r="2"></svg:circle><svg:circle cx="16" cy="10.5" r="2"></svg:circle><svg:path d="M8.5 17h.01M12 15h.01m3.49 2h.01"></svg:path></svg:g>`,
})
export class LucideLabHockeyMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
