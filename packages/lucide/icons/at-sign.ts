import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAtSignIcon],svg[lucide-at-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></svg:path></svg:g>`,
})
export class LucideAtSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
