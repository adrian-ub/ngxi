import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiWhiteCircleIcon],svg[twemoji-white-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#E6E7E8"></svg:circle>`,
})
export class TwemojiWhiteCircleIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
