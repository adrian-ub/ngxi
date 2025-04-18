import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBellConciergeDotIcon],svg[lucide-lab-bell-concierge-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="19" cy="9" r="3"></svg:circle><svg:path d="M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2ZM12 4v4c-4.4 0-8 3.6-8 8m6-12h4"></svg:path></svg:g>`,
})
export class LucideLabBellConciergeDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
