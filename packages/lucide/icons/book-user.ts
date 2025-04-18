import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBookUserIcon],svg[lucide-book-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 13a3 3 0 1 0-6 0"></svg:path><svg:path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></svg:path><svg:circle cx="12" cy="8" r="2"></svg:circle></svg:g>`,
})
export class LucideBookUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
