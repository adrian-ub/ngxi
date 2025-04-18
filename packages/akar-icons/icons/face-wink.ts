import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsFaceWinkIcon],svg[akar-icons-face-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7 9h2m7 .05v-.1"></svg:path><svg:path stroke-linejoin="round" d="M16 15c-.5 1-1.79 2-4 2s-3.5-1-4-2"></svg:path></svg:g>`,
})
export class AkarIconsFaceWinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
