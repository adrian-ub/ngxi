import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabTireIcon],svg[lucide-lab-tire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:path d="M12 14v4m-1.9-5.38l-3.8 1.23m4.52-3.47L8.47 7.15m5.43 5.47l3.8 1.23m-4.52-3.47l2.35-3.23"></svg:path></svg:g>`,
})
export class LucideLabTireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
