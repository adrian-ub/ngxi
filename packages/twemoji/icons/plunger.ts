import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPlungerIcon],svg[twemoji-plunger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D99E82" d="M10.481 25.519a1.82 1.82 0 0 1 0-2.567L32.433 1A1.82 1.82 0 0 1 35 1a1.82 1.82 0 0 1 0 2.567L13.048 25.519a1.82 1.82 0 0 1-2.567 0"></svg:path><svg:path fill="#DD637F" d="m15.009 24.848l-3.901-3.901a1.505 1.505 0 0 1 0-2.121l.298-.298a1.505 1.505 0 0 1 2.121 0l3.901 3.901a1.505 1.505 0 0 1 0 2.121l-.298.298a1.505 1.505 0 0 1-2.121 0"></svg:path><svg:path fill="#DD637F" d="M2.95 22.466c3.118-3.118 8.004-3.286 10.915-.376s2.742 7.797-.376 10.915z"></svg:path><svg:path fill="#BF345D" d="m11.922 34.664l-10.63-10.63a1.003 1.003 0 0 1 0-1.414l.199-.199a1.003 1.003 0 0 1 1.414 0l10.63 10.63a1.003 1.003 0 0 1 0 1.414l-.199.199a1.003 1.003 0 0 1-1.414 0m4.862-9.587l-5.905-5.905a1.47 1.47 0 0 0-.029 1.385l4.548 4.548c.441.223.952.211 1.386-.028"></svg:path><svg:path fill="#EB8CAA" d="M6 25c3-3 5.5-3.5 5.5-3.5S7 20 4 23z"></svg:path>`,
})
export class TwemojiPlungerIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
