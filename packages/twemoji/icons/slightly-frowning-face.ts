import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiSlightlyFrowningFaceIcon],svg[twemoji-slightly-frowning-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#FFCC4D"></svg:circle><svg:path fill="#664500" d="M25.485 27.379C25.44 27.2 24.317 23 18 23s-7.44 4.2-7.485 4.379a.5.5 0 0 0 .237.554a.505.505 0 0 0 .6-.077C11.371 27.837 13.306 26 18 26s6.63 1.837 6.648 1.855a.5.5 0 0 0 .598.081a.5.5 0 0 0 .239-.557"></svg:path><svg:ellipse cx="12" cy="13.5" fill="#664500" rx="2.5" ry="3.5"></svg:ellipse><svg:ellipse cx="24" cy="13.5" fill="#664500" rx="2.5" ry="3.5"></svg:ellipse>`,
})
export class TwemojiSlightlyFrowningFaceIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
