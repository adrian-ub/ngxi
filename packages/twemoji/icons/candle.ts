import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCandleIcon],svg[twemoji-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#67757F" d="M20 21.5a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 1 1 3 0z"></svg:path><svg:path fill="#E1E8ED" d="M27.138 33.817C27.183 35.022 26.206 36 25 36H12.183A2.183 2.183 0 0 1 10 33.817V21c0-1.205.115-2.183 2.183-2.183S15 23 25 21c1.091 0 2.183.978 2.138 2.183z"></svg:path><svg:path fill="#FCAB40" d="M18.687 18.538c-2.595 0-6.962-1.934-6.962-5.898c0-3.988 4.351-5.414 7.005-11.401c.751-1.693.999-1.107 1.86-.076c2.06 2.463 5.058 7.483 5.058 11.574c-.001 4.641-4.64 5.801-6.961 5.801"></svg:path><svg:path fill="#FDCB58" d="M18.687 17.447c-4.184 0-3.482-5.802 0-9.283c2.321 1.16 5.801 9.283 0 9.283"></svg:path><svg:path fill="#CCD6DD" d="M11 29a1 1 0 1 1-2 0v-7a1 1 0 1 1 2 0zm4 3a1 1 0 1 1-2 0v-7a1 1 0 1 1 2 0zm0-11a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class TwemojiCandleIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
