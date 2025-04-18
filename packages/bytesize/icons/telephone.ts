import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeTelephoneIcon],svg[bytesize-telephone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12c0-7 7-7 13-7s13 0 13 7c0 8-7-1-7-1H10s-7 9-7 1m8 2s-5 5-5 14h20c0-9-5-14-5-14z"></svg:path><svg:circle cx="16" cy="21" r="4"></svg:circle></svg:g>`,
})
export class BytesizeTelephoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
