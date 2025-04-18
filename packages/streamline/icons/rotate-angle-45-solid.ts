import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRotateAngle45SolidIcon],svg[streamline-rotate-angle-45-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.78 4.28a.75.75 0 0 0-1.06-1.06L5.18 7.758l-.023.023L.22 12.72A.75.75 0 0 0 .75 14h12.5a.75.75 0 0 0 0-1.5H8.464a7.75 7.75 0 0 0-1.729-4.174zM5.668 9.393L2.561 12.5h4.394a6.25 6.25 0 0 0-1.287-3.107" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRotateAngle45SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
