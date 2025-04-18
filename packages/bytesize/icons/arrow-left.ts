import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeArrowLeftIcon],svg[bytesize-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6L2 16l8 10M2 16h28"></svg:path>`,
})
export class BytesizeArrowLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
