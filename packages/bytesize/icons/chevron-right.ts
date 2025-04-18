import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeChevronRightIcon],svg[bytesize-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 30l12-14L12 2"></svg:path>`,
})
export class BytesizeChevronRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
