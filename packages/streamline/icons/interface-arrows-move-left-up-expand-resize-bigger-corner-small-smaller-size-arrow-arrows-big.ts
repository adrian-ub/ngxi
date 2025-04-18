import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveLeftUpExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-move-left-up-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.5 13.5l-2-2l2-2"></svg:path><svg:path d="M11.5.5v10a1 1 0 0 1-1 1H.5"></svg:path><svg:path d="m9.5 2.5l2-2l2 2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveLeftUpExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
