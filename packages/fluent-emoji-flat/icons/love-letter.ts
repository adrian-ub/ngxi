import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLoveLetterIcon],svg[fluent-emoji-flat-love-letter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#B4ACBC" d="M2 8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></svg:path><svg:path fill="#E1D8EC" d="m3.057 7.876l7.72 5.208l-.554.832L3 9.04v13.91l9.232-5.87l.536.843l-9.718 6.18a1.25 1.25 0 0 0 1.2.898h23.5a1.25 1.25 0 0 0 1.204-.914l-9.722-6.164l.536-.844L29 22.93V9.04l-7.223 4.876l-.554-.832l7.72-5.208A1.25 1.25 0 0 0 27.75 7H4.25a1.25 1.25 0 0 0-1.193.876"></svg:path><svg:path fill="#F92F60" d="M12 9c1.694 0 2.93.919 3.55 1.51c.24.23.66.23.9 0C17.07 9.92 18.307 9 20 9c2.5 0 4 2 4 5c0 4-6.5 9-8 9s-8-5-8-9c0-3 1.5-5 4-5"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLoveLetterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
