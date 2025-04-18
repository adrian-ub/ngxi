import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenXCircleFill16Icon],svg[garden-x-circle-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1C3.36 1 0 4.36 0 8.5S3.36 16 7.5 16S15 12.64 15 8.5S11.64 1 7.5 1m3.44 10.06c.24.24.24.64 0 .88c-.12.12-.28.18-.44.18s-.32-.06-.44-.18L7.5 9.38l-2.56 2.56c-.12.12-.28.18-.44.18s-.32-.06-.44-.18a.63.63 0 0 1 0-.88L6.62 8.5L4.06 5.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L7.5 7.62l2.56-2.56c.24-.24.64-.24.88 0s.24.64 0 .88L8.38 8.5z"></svg:path>`,
})
export class GardenXCircleFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
