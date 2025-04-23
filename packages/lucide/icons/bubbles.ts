import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBubblesIcon],svg[lucide-bubbles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.2 14.8a2 2 0 0 1 2 2"></svg:path><svg:circle cx="18.5" cy="8.5" r="3.5"></svg:circle><svg:circle cx="7.5" cy="16.5" r="5.5"></svg:circle><svg:circle cx="7.5" cy="4.5" r="2.5"></svg:circle></svg:g>`,
})
export class LucideBubblesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
