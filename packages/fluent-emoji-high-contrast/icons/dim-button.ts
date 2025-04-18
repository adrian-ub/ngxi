import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastDimButtonIcon],svg[fluent-emoji-high-contrast-dim-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.65 5.82a1.91 1.91 0 1 0 0-3.82a1.91 1.91 0 0 0 0 3.82m.22 18.29c-4.54 0-8.23-3.69-8.23-8.23s3.69-8.23 8.23-8.23s8.23 3.69 8.23 8.23s-3.69 8.23-8.23 8.23m0-13.47a5.24 5.24 0 0 0-5.23 5.23a5.24 5.24 0 0 0 5.23 5.23a5.24 5.24 0 0 0 5.23-5.23c0-2.88-2.34-5.23-5.23-5.23m-6.7-3.07a1.91 1.91 0 1 1-3.82 0a1.91 1.91 0 0 1 3.82 0M3.91 18a1.91 1.91 0 1 0 0-3.82a1.91 1.91 0 0 0 0 3.82m5.57 6.49a1.91 1.91 0 1 1-3.82 0a1.91 1.91 0 0 1 3.82 0m6.61 5.25a1.91 1.91 0 1 0 0-3.82a1.91 1.91 0 0 0 0 3.82m10.31-5.56a1.91 1.91 0 1 1-3.82 0a1.91 1.91 0 0 1 3.82 0m1.43-6.62a1.91 1.91 0 1 0 0-3.82a1.91 1.91 0 0 0 0 3.82m-1.74-10.3a1.91 1.91 0 1 1-3.82 0a1.91 1.91 0 0 1 3.82 0"></svg:path>`,
})
export class FluentEmojiHighContrastDimButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
