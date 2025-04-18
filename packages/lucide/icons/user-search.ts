import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideUserSearchIcon],svg[lucide-user-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="10" cy="7" r="4"></svg:circle><svg:path d="M10.3 15H7a4 4 0 0 0-4 4v2"></svg:path><svg:circle cx="17" cy="17" r="3"></svg:circle><svg:path d="m21 21l-1.9-1.9"></svg:path></svg:g>`,
})
export class LucideUserSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
