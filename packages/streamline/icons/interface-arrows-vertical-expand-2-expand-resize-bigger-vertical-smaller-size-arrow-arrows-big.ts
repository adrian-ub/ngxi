import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsVerticalExpand2ExpandResizeBiggerVerticalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-vertical-expand-2-expand-resize-bigger-vertical-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 11.5v-9M9.5 5L7 2.5L4.5 5m5 4L7 11.5L4.5 9m9-8.5H.5m13 13H.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsVerticalExpand2ExpandResizeBiggerVerticalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
