import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpandDiagonal1ExpandResizeBiggerDiagonalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-expand-diagonal-1-expand-resize-bigger-diagonal-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 5L13.5.5m-4 0h4v4M5 9L.5 13.5m4 0h-4v-4M4 4l6 6"></svg:path>`,
})
export class StreamlineInterfaceArrowsExpandDiagonal1ExpandResizeBiggerDiagonalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
