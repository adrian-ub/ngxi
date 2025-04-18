import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastTrackballIcon],svg[fluent-emoji-high-contrast-trackball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.94 9.41a1.59 1.59 0 1 1-3.18 0a1.59 1.59 0 0 1 3.18 0"></svg:path><svg:path d="M6 6.69A5.69 5.69 0 0 1 11.69 1h8.62A5.69 5.69 0 0 1 26 6.69v18.62A5.69 5.69 0 0 1 20.31 31h-8.62A5.69 5.69 0 0 1 6 25.31zM11.69 3A3.69 3.69 0 0 0 8 6.69v18.62A3.69 3.69 0 0 0 11.69 29h8.62A3.69 3.69 0 0 0 24 25.31V6.69A3.69 3.69 0 0 0 20.31 3H17v2.083a6.002 6.002 0 0 1 0 11.834V18a1 1 0 1 1-2 0v-1.083a6.002 6.002 0 0 1 0-11.834V3zM16 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastTrackballIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
