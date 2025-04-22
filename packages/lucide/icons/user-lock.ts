import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideUserLockIcon],svg[lucide-user-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="10" cy="7" r="4"></svg:circle><svg:path d="M10.3 15H7a4 4 0 0 0-4 4v2m12-5.5V14a2 2 0 0 1 4 0v1.5"></svg:path><svg:rect width="8" height="5" x="13" y="16" rx=".899"></svg:rect></svg:g>`,
})
export class LucideUserLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
