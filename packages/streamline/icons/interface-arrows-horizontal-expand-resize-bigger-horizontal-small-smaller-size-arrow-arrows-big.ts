import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsHorizontalExpandResizeBiggerHorizontalSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-horizontal-expand-resize-bigger-horizontal-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7H.5m3-3l-3 3l3 3m7-6l3 3l-3 3"></svg:path>`,
})
export class StreamlineInterfaceArrowsHorizontalExpandResizeBiggerHorizontalSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
