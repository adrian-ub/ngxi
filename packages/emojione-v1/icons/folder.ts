import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FolderIcon],svg[emojione-v1-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#d69661"><svg:path d="M52.48 14c2.498 0 4.52 2.224 4.52 4.978v31.04c0 2.746-2.02 4.979-4.52 4.979H11.516C9.024 54.997 7 52.765 7 50.018V18.269c0-2.754 2.02-4.272 4.516-4.272"></svg:path><svg:path d="M22.26 8c.842 0 1.525.75 1.525 1.68l10 10.709c0 .926-.684 1.678-1.525 1.678H8.522c-.84 0-1.521-.752-1.521-1.678V9.68c0-.93.682-1.68 1.521-1.68z"></svg:path></svg:g>`,
})
export class EmojioneV1FolderIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
