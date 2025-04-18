import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastTriangularFlagIcon],svg[fluent-emoji-high-contrast-triangular-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v26h4V4a2 2 0 0 0-2-2m21.626 11.056L9 20.596V4.404l18.626 7.539a.6.6 0 0 1 0 1.112"></svg:path>`,
})
export class FluentEmojiHighContrastTriangularFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
