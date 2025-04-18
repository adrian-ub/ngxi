import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacLibraIcon],svg[mdi-zodiac-libra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16v2h-7v-2.09c3-.55 4.96-3.41 4.41-6.41S14 4.54 11 5.09C8 5.65 6.04 8.5 6.59 11.5c.41 2.24 2.17 4 4.41 4.41V18H4v-2h2.92a7.43 7.43 0 0 1-2.42-5.5A7.5 7.5 0 0 1 12 3a7.5 7.5 0 0 1 7.5 7.5c0 2.09-.87 4.09-2.42 5.5zm0 3H4v2h16z"></svg:path>`,
})
export class MdiZodiacLibraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
