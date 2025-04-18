import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSearchCodeIcon],svg[lucide-search-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13 13.5l2-2.5l-2-2.5M21 21l-4.3-4.3M9 8.5L7 11l2 2.5"></svg:path><svg:circle cx="11" cy="11" r="8"></svg:circle></svg:g>`,
})
export class LucideSearchCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
