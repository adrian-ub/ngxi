import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpandDiagonal2ExpandResizeBiggerDiagonalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-expand-diagonal-2-expand-resize-bigger-diagonal-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 5L.5.5m4 0h-4v4M9 9l4.5 4.5m-4 0h4v-4M10 4l-6 6"></svg:path>`,
})
export class StreamlineInterfaceArrowsExpandDiagonal2ExpandResizeBiggerDiagonalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
