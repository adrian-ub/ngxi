import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiTriangularFlagIcon],svg[twemoji-triangular-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66757F" d="M13 34s0 2-2 2s-2-2-2-2V2s0-2 2-2s2 2 2 2z"></svg:path><svg:path fill="#DD2E44" d="M11 4c0-2.2 1.636-3.25 3.636-2.333l16.727 7.667c2 .917 2 2.417 0 3.333l-16.727 7.667C12.636 21.25 11 20.2 11 18z"></svg:path>`,
})
export class TwemojiTriangularFlagIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
