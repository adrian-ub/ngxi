import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHatHardIcon],svg[lucide-lab-hat-hard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 6.3c-3.4.9-6 4-6 7.7v2m6-6V5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v5m6 6v-2c0-3.7-2.6-6.8-6-7.7"></svg:path><svg:rect width="20" height="4" x="2" y="16" rx="1"></svg:rect></svg:g>`,
})
export class LucideLabHatHardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
