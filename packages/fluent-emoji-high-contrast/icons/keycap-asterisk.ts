import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastKeycapAsteriskIcon],svg[fluent-emoji-high-contrast-keycap-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.772 9.5a1.75 1.75 0 1 0-3.5 0v3.482l-3.026-1.747a1.75 1.75 0 1 0-1.75 3.03L12.5 16l-3.004 1.735a1.75 1.75 0 1 0 1.75 3.03l3.026-1.747V22.5a1.75 1.75 0 1 0 3.5 0v-3.456l2.982 1.722a1.75 1.75 0 0 0 1.75-3.031L19.5 16l3.004-1.734a1.75 1.75 0 0 0-1.75-3.031l-2.982 1.721z"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastKeycapAsteriskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
