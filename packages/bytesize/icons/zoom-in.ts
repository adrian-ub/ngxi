import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeZoomInIcon],svg[bytesize-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="14" cy="14" r="12"></svg:circle><svg:path d="m23 23l7 7M14 10v8m-4-4h8"></svg:path></svg:g>`,
})
export class BytesizeZoomInIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
