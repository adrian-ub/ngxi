import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastBarberPoleIcon],svg[fluent-emoji-high-contrast-barber-pole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.27 2h2.47c1.56 0 2.82 1.27 2.82 2.82v.02h.04c1.35 0 2.44 1.09 2.44 2.44s-1.09 2.44-2.44 2.44h-3.3l-4.8 2.32V9.72h-.06C10.09 9.72 9 8.63 9 7.28s1.09-2.44 2.44-2.44h.01v-.02c0-1.56 1.26-2.82 2.82-2.82m5.34 11.72l-8.11 3.93v2.16l8.11-3.92zm-.01 11.42h-3.073l3.083-1.49v-2.16l-7.551 3.65h-.619c-1.35 0-2.44 1.09-2.44 2.44s1.09 2.44 2.44 2.44h8.16c1.35 0 2.44-1.09 2.44-2.44s-1.09-2.44-2.44-2.44"></svg:path><svg:path d="m11.5 13.76l8.11-3.92V12l-8.11 3.92zm0 7.77l8.11-3.92v2.16l-8.11 3.92z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastBarberPoleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
