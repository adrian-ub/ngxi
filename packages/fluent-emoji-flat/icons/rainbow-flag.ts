import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatRainbowFlagIcon],svg[fluent-emoji-flat-rainbow-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F8312F" d="m2 9l2 1h24l2-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"></svg:path><svg:path fill="#8D65C5" d="M2 25a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-2l-2-1H4l-2 1z"></svg:path><svg:path fill="#FFB02E" d="m2 12l2 1h24l2-1V9H2z"></svg:path><svg:path fill="#3F5FFF" d="M2 23h28v-3l-2-1H4l-2 1z"></svg:path><svg:path fill="#00D26A" d="M2 20h28v-4l-2-1H4l-2 1z"></svg:path><svg:path fill="#FFF478" d="M30 16v-4H2v4z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatRainbowFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
