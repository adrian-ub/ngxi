import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeArchiveIcon],svg[bytesize-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10v18h24V10M2 4v6h28V4Zm10 11h8"></svg:path>`,
})
export class BytesizeArchiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
