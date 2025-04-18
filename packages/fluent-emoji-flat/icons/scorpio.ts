import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatScorpioIcon],svg[fluent-emoji-flat-scorpio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="m27.55 18.67l-2-2.12a.76.76 0 0 0-.55-.24c-.21 0-.4.09-.55.24l-2 2.12c-.28.3-.27.78.03 1.06s.78.27 1.06-.03l.46-.48v2.3a1.5 1.5 0 0 1-3-.02V11c0-2.21-1.79-4-4-4a4 4 0 0 0-3 1.36A4 4 0 0 0 11 7a4 4 0 0 0-3 1.36A4 4 0 0 0 5 7c-.55 0-1 .45-1 1s.45 1 1 1c1.1 0 2 .9 2 2v13c0 .55.45 1 1 1s1-.45 1-1V11c0-1.1.9-2 2-2s2 .9 2 2v13c0 .55.45 1 1 1s1-.45 1-1V11c0-1.1.9-2 2-2s2 .9 2 2v10.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5v-2.28l.45.48a.75.75 0 0 0 1.06.04c.31-.29.32-.76.04-1.07"></svg:path></svg:g>`,
})
export class FluentEmojiFlatScorpioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
