import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeSignOutIcon],svg[bytesize-sign-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M28 16H8m12-8l8 8l-8 8m-9 4H3V4h8"></svg:path>`,
})
export class BytesizeSignOutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
