import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeChevronLeftIcon],svg[bytesize-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 30L8 16L20 2"></svg:path>`,
})
export class BytesizeChevronLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
