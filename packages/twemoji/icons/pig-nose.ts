import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPigNoseIcon],svg[twemoji-pig-nose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E6AAAA" d="M35 18c0 6.075-4.925 11-11 11H12C5.925 29 1 24.075 1 18S5.925 7 12 7h12c6.075 0 11 4.925 11 11"></svg:path><svg:ellipse cx="10" cy="18" fill="#662113" rx="4" ry="6"></svg:ellipse><svg:ellipse cx="26" cy="18" fill="#662113" rx="4" ry="6"></svg:ellipse>`,
})
export class TwemojiPigNoseIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
