import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveRightDownExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-move-right-down-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5.5l2 2l-2 2"></svg:path><svg:path d="M2.5 13.5v-10a1 1 0 0 1 1-1h10"></svg:path><svg:path d="m4.5 11.5l-2 2l-2-2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveRightDownExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
