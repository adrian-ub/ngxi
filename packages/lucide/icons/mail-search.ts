import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMailSearchIcon],svg[lucide-mail-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"></svg:path><svg:path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m16 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path d="m22 22l-1.5-1.5"></svg:path></svg:g>`,
})
export class LucideMailSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
