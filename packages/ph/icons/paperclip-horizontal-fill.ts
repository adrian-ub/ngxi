import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPaperclipHorizontalFillIcon],svg[ph-paperclip-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 144H72a24 24 0 0 1 0-48h96a8 8 0 0 1 0 16H72a8 8 0 0 0 0 16h96a24 24 0 0 0 0-48H96a8 8 0 0 1 0-16h72a40 40 0 0 1 0 80"></svg:path>`,
})
export class PhPaperclipHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
