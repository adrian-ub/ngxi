import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPigNoseIcon],svg[fluent-emoji-flat-pig-nose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FF8687" d="M30 21.79C29.89 14.17 23.66 9 16 9S2.11 14.17 2 21.79V22c0 4.42 3.58 8 8 8h12c4.42 0 8-3.58 8-8z"></svg:path><svg:path fill="#1C1C1C" d="M10 16a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0v-4a3 3 0 0 0-3-3m12 0a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0v-4a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPigNoseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
