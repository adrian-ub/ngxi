import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1PackageIcon],svg[emojione-v1-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8c6d53" d="M33.34 63.62L8.95 48.21l.274-28.427L33.612 35.2z"></svg:path><svg:path fill="#a4805e" d="m58.46 15.956l-.27 28.424l-24.85 19.24l.272-28.42z"></svg:path><svg:path fill="#c19d84" d="M32 33.99v28.96l1.2.67l1.04-.743l.434-28.627z"></svg:path><svg:path fill="#8a5f3d" d="M33.612 35.2L9.224 19.783L34.07.543l24.39 15.413z"></svg:path><svg:g fill="#d6e8ed"><svg:path d="m50.16 28l-7.84 6.25l-2.16-10.09l9.08-1.15z"></svg:path><svg:path d="m48.966 23.31l-5.926 4.592l-23.404-16.177l5.883-4.561z"></svg:path></svg:g><svg:g fill="#b6c9ce"><svg:path d="m47.27 24.627l-6.08 4.704L17.894 13.07l5.886-4.552z"></svg:path><svg:path d="m47.593 24.591l.887 4.826l-6.845 5l-.923-5.03z"></svg:path></svg:g>`,
})
export class EmojioneV1PackageIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
