import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiAlienIcon],svg[twemoji-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CCD6DD" d="M35 17c0 9.389-13.223 19-17 19c-3.778 0-17-9.611-17-19S8.611 0 18 0s17 7.611 17 17"></svg:path><svg:path fill="#292F33" d="M13.503 14.845c3.124 3.124 4.39 6.923 2.828 8.485s-5.361.297-8.485-2.828c-3.125-3.124-4.391-6.923-2.828-8.485s5.361-.296 8.485 2.828m8.994 0c-3.124 3.124-4.39 6.923-2.828 8.485s5.361.297 8.485-2.828c3.125-3.125 4.391-6.923 2.828-8.485c-1.562-1.562-5.361-.297-8.485 2.828M18 31c-2.347 0-3.575-1.16-3.707-1.293a.999.999 0 0 1 1.404-1.424c.051.047.806.717 2.303.717c1.519 0 2.273-.689 2.305-.719a1.007 1.007 0 0 1 1.408.029a.993.993 0 0 1-.006 1.396C21.575 29.84 20.347 31 18 31"></svg:path>`,
})
export class TwemojiAlienIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
