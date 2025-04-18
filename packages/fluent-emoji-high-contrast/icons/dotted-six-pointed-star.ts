import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastDottedSixPointedStarIcon],svg[fluent-emoji-high-contrast-dotted-six-pointed-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path d="m12.825 10.5l2.309-4a1 1 0 0 1 1.732 0l2.31 4h4.618a1 1 0 0 1 .866 1.5l-2.31 4l2.31 4a1 1 0 0 1-.866 1.5h-4.619l-2.309 4a1 1 0 0 1-1.732 0l-2.31-4H8.207A1 1 0 0 1 7.34 20l2.31-4l-2.31-4a1 1 0 0 1 .866-1.5zm1.732 0h2.886L16 8zm-4.042 4L11.96 12H9.072zm.866 1.5l2.31 4h4.618l2.31-4l-2.31-4h-4.618zm-.866 1.5L9.072 20h2.887zm4.042 4L16 24l1.443-2.5zm8.371-1.5l-1.443-2.5L20.04 20zm-1.443-5.5l1.443-2.5h-2.887z"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastDottedSixPointedStarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
