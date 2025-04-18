import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeOptionsIcon],svg[bytesize-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M28 6H4m24 10H4m24 10H4M24 3v6M8 13v6m12 4v6"></svg:path>`,
})
export class BytesizeOptionsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
