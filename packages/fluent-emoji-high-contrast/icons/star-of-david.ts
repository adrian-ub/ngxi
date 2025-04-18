import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastStarOfDavidIcon],svg[fluent-emoji-high-contrast-star-of-david-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12.825 21.5l2.309 4a1 1 0 0 0 1.732 0l2.31-4h4.618a1 1 0 0 0 .866-1.5l-2.31-4l2.31-4a1 1 0 0 0-.866-1.5h-4.619l-2.309-4a1 1 0 0 0-1.732 0l-2.31 4H8.207A1 1 0 0 0 7.34 12l2.31 4l-2.31 4a1 1 0 0 0 .866 1.5zm1.732 0h2.886L16 24zM13.69 20l-2.31-4l2.31-4h4.618l2.31 4l-2.31 4zm-3.176-2.5L11.96 20H9.072zm0-3L9.072 12h2.887zm4.042-4L16 8l1.443 2.5zM20.04 12h2.887l-1.443 2.5zm1.444 5.5l1.443 2.5H20.04z"></svg:path><svg:path d="M1 6a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastStarOfDavidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
