import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1UpRightArrowIcon],svg[emojione-v1-up-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1b75bb" d="M63.915 57.025a6.89 6.89 0 0 1-6.887 6.895H6.886A6.89 6.89 0 0 1 0 57.025V6.891A6.89 6.89 0 0 1 6.886 0h50.142a6.89 6.89 0 0 1 6.887 6.891z"></svg:path><svg:path fill="#fff" d="m25.2 17.929l24.308-2.201l-1.269 24.292c-1.924 1.712-4.559 1.971-6.07.52l-2.568-2.462l-11.553 12.04a5.09 5.09 0 0 1-7.193.151l-4.759-4.57a5.09 5.09 0 0 1-.149-7.193l11.554-12.04l-2.566-2.46c-1.508-1.449-1.363-4.084.261-6.08"></svg:path>`,
})
export class EmojioneV1UpRightArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
