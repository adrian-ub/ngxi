import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideUserRoundSearchIcon],svg[lucide-user-round-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="10" cy="8" r="5"></svg:circle><svg:path d="M2 21a8 8 0 0 1 10.434-7.62"></svg:path><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path d="m22 22l-1.9-1.9"></svg:path></svg:g>`,
})
export class LucideUserRoundSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
