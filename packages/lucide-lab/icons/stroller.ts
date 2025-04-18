import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabStrollerIcon],svg[lucide-lab-stroller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 12.95c1.6-1.6 4.1-1.6 5.7.05"></svg:path><svg:circle cx="11" cy="6.5" r="2.5"></svg:circle><svg:path d="M18.3 17.2L5.45 4.5M19.7 17L13 18.1c-2.7.5-5.5-1-5.7-4.1c-.4-2.6-.9-5.7-1.3-8.3A2 2 0 0 0 2 6"></svg:path><svg:circle cx="8" cy="19" r="2"></svg:circle><svg:circle cx="20" cy="19" r="2"></svg:circle></svg:g>`,
})
export class LucideLabStrollerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
