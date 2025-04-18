import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFloppyDiskIcon],svg[emojione-monotone-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 6h10v16H36z"></svg:path><svg:path fill="currentColor" d="m61.293 9.293l-6.586-6.586C54.318 2.318 53.55 2 53 2H9v4H5V2H3c-.55 0-1 .45-1 1v58c0 .55.45 1 1 1h58c.55 0 1-.45 1-1V11c0-.55-.318-1.318-.707-1.707M52 58H12V34c0-1.1.9-2 2-2h36c1.1 0 2 .9 2 2zm0-36c0 1.1-.899 2-2 2H20c-1.1 0-2-.9-2-2V3h34zm7 36c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1z"></svg:path><svg:path fill="currentColor" d="M17 36h30v2H17zm0 6h30v2H17zm0 6h30v2H17z"></svg:path>`,
})
export class EmojioneMonotoneFloppyDiskIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
