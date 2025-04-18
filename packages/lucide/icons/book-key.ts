import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBookKeyIcon],svg[lucide-book-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m19 3l1 1m0-2l-4.5 4.5M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></svg:path><svg:path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"></svg:path><svg:circle cx="14" cy="8" r="2"></svg:circle></svg:g>`,
})
export class LucideBookKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
