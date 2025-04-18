import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeLinkIcon],svg[bytesize-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 8s6-6 9-3s2 7-3 11s-8 5-10 1m0 7s-6 6-9 3s-2-7 3-11s8-5 10-1"></svg:path>`,
})
export class BytesizeLinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
