import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCaseSensitiveIcon],svg[lucide-case-sensitive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 15l4-8l4 8m-7-2h6"></svg:path><svg:circle cx="18" cy="12" r="3"></svg:circle><svg:path d="M21 9v6"></svg:path></svg:g>`,
})
export class LucideCaseSensitiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
