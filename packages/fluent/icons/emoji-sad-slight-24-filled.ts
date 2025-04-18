import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiSadSlight24FilledIcon],svg[fluent-emoji-sad-slight-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.002 12.002C22.002 6.478 17.524 2 12 2S2 6.478 2 12.002c0 5.523 4.477 10.001 10.001 10.001s10.002-4.478 10.002-10.001m-14.25-2a1.25 1.25 0 1 1 2.498 0a1.25 1.25 0 0 1-2.499 0m6 0a1.25 1.25 0 1 1 2.498 0a1.25 1.25 0 0 1-2.499 0M15.75 14h.6a.75.75 0 0 1 0 1.5h-.6c-.618 0-1.337.16-1.998.418c-.669.26-1.197.588-1.472.862a.75.75 0 1 1-1.06-1.06c.475-.476 1.212-.898 1.989-1.2c.784-.306 1.69-.52 2.541-.52"></svg:path>`,
})
export class FluentEmojiSadSlight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
