import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBookLockIcon],svg[lucide-book-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 6V4a2 2 0 1 0-4 0v2m6 9v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></svg:path><svg:path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"></svg:path><svg:rect width="8" height="5" x="12" y="6" rx="1"></svg:rect></svg:g>`,
})
export class LucideBookLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
