import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatTransgenderFlagIcon],svg[fluent-emoji-flat-transgender-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#83CBFF" fill-rule="evenodd" d="M3 6a1 1 0 0 0-1 1v3l2 1h24l2-1V7a1 1 0 0 0-1-1zm26 20a1 1 0 0 0 1-1v-3l-2-1H4l-2 1v3a1 1 0 0 0 1 1z" clip-rule="evenodd"></svg:path><svg:path fill="#FFB2FF" fill-rule="evenodd" d="M30 10H2v4l2 1h24l2-1zM4 17l-2 1v4h28v-4l-2-1z" clip-rule="evenodd"></svg:path><svg:path fill="#F3EEF8" d="M2 14h28v4H2z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatTransgenderFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
