import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBombIcon],svg[twemoji-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CCD6DD" d="m24.187 9.657l5.658-5.654L32 6.16l-5.658 5.655z"></svg:path><svg:circle cx="14" cy="22" r="14" fill="#31373D"></svg:circle><svg:path fill="#31373D" d="m19 11.342l5.658-5.657l5.657 5.658L24.657 17z"></svg:path><svg:circle cx="32" cy="4" r="4" fill="#F18F26"></svg:circle><svg:circle cx="32" cy="4" r="2" fill="#FDCB58"></svg:circle>`,
})
export class TwemojiBombIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
