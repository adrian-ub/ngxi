import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHatBeanieIcon],svg[lucide-lab-hat-beanie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10.4 6.2C6.7 6.9 4 10.1 4 14v1"></svg:path><svg:circle cx="12" cy="5" r="2"></svg:circle><svg:path d="M20 15v-1c0-3.9-2.7-7.1-6.4-7.8"></svg:path><svg:rect width="20" height="5" x="2" y="15" rx="1"></svg:rect><svg:path d="M6 15v5m4-5v5m4-5v5m4-5v5"></svg:path></svg:g>`,
})
export class LucideLabHatBeanieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
