import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabLuggageCabinIcon],svg[lucide-lab-luggage-cabin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 2h8m-6 0v5m4-5v5"></svg:path><svg:rect width="12" height="14" x="6" y="7" rx="2"></svg:rect><svg:path d="M14 21v-8a2 2 0 1 0-4 0v8m-2 0v1m8-1v1"></svg:path></svg:g>`,
})
export class LucideLabLuggageCabinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
