import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPaperclipHorizontalBoldIcon],svg[ph-paperclip-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 128a60.07 60.07 0 0 1-60 60H44a40 40 0 0 1 0-80h140a12 12 0 0 1 0 24H44a16 16 0 0 0 0 32h148a36 36 0 0 0 0-72H80a12 12 0 0 1 0-24h112a60.07 60.07 0 0 1 60 60"></svg:path>`,
})
export class PhPaperclipHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
