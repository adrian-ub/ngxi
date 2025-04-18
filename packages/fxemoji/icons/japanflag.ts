import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiJapanflagIcon],svg[fxemoji-japanflag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E8E8E8" d="M494.661 425.149c-159.52-37.139-319.04 45.468-478.559 8.329C7.209 431.416 0 422.098 0 413.212V98.788C0 89.89 7.209 84.79 16.101 86.851c159.52 37.139 319.04-45.468 478.559-8.329c8.892 2.061 16.101 11.379 16.101 20.266v314.424c.001 8.898-7.208 13.998-16.1 11.937"></svg:path><svg:circle cx="255.381" cy="256" r="92.048" fill="#FF473E"></svg:circle>`,
})
export class FxemojiJapanflagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
