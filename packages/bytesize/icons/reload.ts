import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeReloadIcon],svg[bytesize-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29 16c0 6-5 13-13 13S3 22 3 16S8 3 16 3c5 0 9 3 11 6m-7 1l7-1l1-7"></svg:path>`,
})
export class BytesizeReloadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
