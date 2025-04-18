import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsFaceHappyIcon],svg[akar-icons-face-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8 9.05v-.1m8 .1v-.1"></svg:path><svg:path stroke-linejoin="round" d="M16 14c-.5 1.5-1.79 3-4 3s-3.5-1.5-4-3"></svg:path></svg:g>`,
})
export class AkarIconsFaceHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
