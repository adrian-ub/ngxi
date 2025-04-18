import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPaperclipHorizontalThinIcon],svg[ph-paperclip-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128a52.06 52.06 0 0 1-52 52H48a36 36 0 0 1 0-72h144a20 20 0 0 1 0 40H80a4 4 0 0 1 0-8h112a12 12 0 0 0 0-24H48a28 28 0 0 0 0 56h144a44 44 0 0 0 0-88H80a4 4 0 0 1 0-8h112a52.06 52.06 0 0 1 52 52"></svg:path>`,
})
export class PhPaperclipHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
