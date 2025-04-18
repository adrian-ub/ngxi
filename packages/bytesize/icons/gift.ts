import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeGiftIcon],svg[bytesize-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14v16h24V14M2 9v5h28V9Zm14 0s-2-9-8-6s8 6 8 6s2-9 8-6s-8 6-8 6m0 0v21"></svg:path>`,
})
export class BytesizeGiftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
