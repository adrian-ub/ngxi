import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiDivideIcon],svg[twemoji-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M34 18a3 3 0 0 1-3 3H5a3 3 0 1 1 0-6h26a3 3 0 0 1 3 3"></svg:path><svg:circle cx="18" cy="7" r="4" fill="#31373D"></svg:circle><svg:circle cx="18" cy="29" r="4" fill="#31373D"></svg:circle>`,
})
export class TwemojiDivideIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
