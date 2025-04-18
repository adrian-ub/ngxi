import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiLaugh16RegularIcon],svg[fluent-emoji-laugh-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6a.5.5 0 0 0-.5.5a.5.5 0 0 1-1 0a1.5 1.5 0 1 1 3 0a.5.5 0 0 1-1 0A.5.5 0 0 0 6 6m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 1-1 0a1.5 1.5 0 1 1 3 0a.5.5 0 0 1-1 0A.5.5 0 0 0 10 6M4.535 8a.5.5 0 0 0-.495.57a4 4 0 0 0 7.92 0a.5.5 0 0 0-.496-.57zM8 11a3 3 0 0 1-2.83-2h5.66A3 3 0 0 1 8 11m6-3A6 6 0 1 0 2 8a6 6 0 0 0 12 0M3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8"></svg:path>`,
})
export class FluentEmojiLaugh16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
