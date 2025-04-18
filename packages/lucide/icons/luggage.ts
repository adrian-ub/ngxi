import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLuggageIcon],svg[lucide-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"></svg:path><svg:path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14m-6 2h4"></svg:path><svg:circle cx="16" cy="20" r="2"></svg:circle><svg:circle cx="8" cy="20" r="2"></svg:circle></svg:g>`,
})
export class LucideLuggageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
