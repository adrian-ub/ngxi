import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsImageFrameLineIcon],svg[majesticons-image-frame-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 20h3a2 2 0 0 0 2-2v-5m-5 7H5a2 2 0 0 1-2-2v-3m13 5c-.558-1.116-2.43-2.979-6.128-4.088M21 13V8a2 2 0 0 0-2-2h-3m5 7c-3.076-.118-8.335.435-11.128 2.912M3 15V8a2 2 0 0 1 2-2h3m-5 9c2.776 0 5.047.364 6.872.912M8 6l2.586-2.586a2 2 0 0 1 2.828 0L16 6M8 6h8M7.5 9C7 9 6 9.3 6 10.5S7 12 7.5 12S9 11.7 9 10.5S8 9 7.5 9"></svg:path>`,
})
export class MajesticonsImageFrameLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
