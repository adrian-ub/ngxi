import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiGreenCircleIcon],svg[twemoji-green-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#78B159"></svg:circle>`,
})
export class TwemojiGreenCircleIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
