import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowTransferDiagonal2SolidIcon],svg[streamline-arrow-transfer-diagonal-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 0a1 1 0 0 1 .707 1.707L7.406 3.008l6.3 6.284a1 1 0 0 1-1.412 1.416L3.278 1.716a1 1 0 0 1 .28-1.613A1 1 0 0 1 4 0zM6.586 11L.293 4.707a1 1 0 0 1 1.414-1.414l7 7l2 2a.996.996 0 0 1 .05 1.36A1 1 0 0 1 10 14H6a1 1 0 0 1-.707-1.708z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowTransferDiagonal2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
