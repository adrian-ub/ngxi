import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastMansShoeIcon],svg[fluent-emoji-high-contrast-mans-shoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 18.7C2 17.21 3.21 16 4.7 16h8.64c.924 0 1.803.32 2.53.885l-1.588 1.587a.69.69 0 1 0 .976.976l1.64-1.64a1 1 0 0 0 .085-.103a13 13 0 0 0 1.716.91l-1.437 1.437a.69.69 0 1 0 .976.976l1.64-1.64a.7.7 0 0 0 .156-.24a26 26 0 0 0 4.956 1.202c2.9.55 5.01 3.09 5.01 6.05v2.81H14.22c0-1.56-1.26-2.82-2.82-2.82H2z"></svg:path><svg:path d="M20.034 19.148a.69.69 0 0 0-1.132-.736l-.203.204c.442.197.89.374 1.335.532m-3.051-1.443A9 9 0 0 1 16 16.99l-.13-.105l.052-.053a.69.69 0 0 1 1.061.873M2 27.383h7.98v1.837H2z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastMansShoeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
