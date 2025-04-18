import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeBellIcon],svg[bytesize-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17c0-5 1-11 8-11s8 6 8 11s3 8 3 8H5s3-3 3-8m12 8s0 4-4 4s-4-4-4-4m4-22v3"></svg:path>`,
})
export class BytesizeBellIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
