import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeSignInIcon],svg[bytesize-sign-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16h20m-8-8l8 8l-8 8m6-20h8v24h-8"></svg:path>`,
})
export class BytesizeSignInIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
