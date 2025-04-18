import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastTangerineIcon],svg[fluent-emoji-high-contrast-tangerine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2H7a5 5 0 0 0 4.625 4.986C7.144 8.886 4 13.326 4 18.5C4 25.404 9.596 31 16.5 31S29 25.404 29 18.5c0-6.77-5.38-12.282-12.099-12.494A5 5 0 0 0 12 2M6 18.5C6 12.701 10.701 8 16.5 8S27 12.701 27 18.5S22.299 29 16.5 29S6 24.299 6 18.5"></svg:path>`,
})
export class FluentEmojiHighContrastTangerineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
