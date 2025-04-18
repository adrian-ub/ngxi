import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabOnionIcon],svg[lucide-lab-onion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:path d="M2.8 8.1a10 10 0 1 0 5.3-5.3C5 4 3 2 3 2L2 3s2 2 .8 5.1M18 20v2m3-1l-1.9-1.9M22 18h-2"></svg:path></svg:g>`,
})
export class LucideLabOnionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
