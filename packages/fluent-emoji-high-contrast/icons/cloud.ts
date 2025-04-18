import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastCloudIcon],svg[fluent-emoji-high-contrast-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.55 9.704c3.46-3.55 9.14-3.61 12.69-.15c3.28 3.21 3.58 8.33.86 11.89a8.37 8.37 0 0 1-6.83 3.52H8.58c-2.11 0-3.98-1-5.17-2.56A6.47 6.47 0 0 1 2 18.374a6.457 6.457 0 0 1 6.589-6.458a4.04 4.04 0 0 1 5.624-1.849q.163-.184.337-.363"></svg:path>`,
})
export class FluentEmojiHighContrastCloudIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
