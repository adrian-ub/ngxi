import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFloppyDiskIcon],svg[emojione-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3e4347" d="m61.3 9.3l-6.6-6.6c-.4-.4-1.2-.7-1.7-.7H9v4H5V2H3c-.5 0-1 .5-1 1v58c0 .5.5 1 1 1h58c.5 0 1-.5 1-1V11c0-.6-.3-1.3-.7-1.7"></svg:path><svg:path fill="#fff" d="M12 62V34c0-1.1.9-2 2-2h36c1.1 0 2 .9 2 2v28z"></svg:path><svg:path fill="#e8e8e8" d="M18 2v20c0 1.1.9 2 2 2h30c1.1 0 2-.9 2-2V2z"></svg:path><svg:path fill="#3e4347" d="M36 6h10v16H36z"></svg:path><svg:path fill="#fff" d="M59 56c0-.6-.5-1-1-1h-2c-.5 0-1 .4-1 1v2c0 .5.5 1 1 1h2c.5 0 1-.5 1-1z"></svg:path><svg:path fill="#f15744" d="M12 54h40v8H12zm5-18h30v2H17zm0 6h30v2H17zm0 6h30v2H17z"></svg:path>`,
})
export class EmojioneFloppyDiskIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
