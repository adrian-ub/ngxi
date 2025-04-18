import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastRoundPushpinIcon],svg[fluent-emoji-high-contrast-round-pushpin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.695 9.445c-.97-.97-.92-2.59.12-3.63c1.03-1.04 2.66-1.09 3.63-.12s.92 2.59-.12 3.63c-1.03 1.04-2.66 1.09-3.63.12"></svg:path><svg:path d="M7 9.93a8.93 8.93 0 1 1 9.95 8.872V28.9c-.01.57-.46 1.02-1.02 1.02s-1.01-.45-1.01-1.01V18.804A8.93 8.93 0 0 1 7 9.93M15.93 3a6.93 6.93 0 1 0 0 13.86a6.93 6.93 0 0 0 0-13.86"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastRoundPushpinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
