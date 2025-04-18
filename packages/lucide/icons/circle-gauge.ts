import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCircleGaugeIcon],svg[lucide-circle-gauge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path d="M13.4 10.6L19 5"></svg:path></svg:g>`,
})
export class LucideCircleGaugeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
