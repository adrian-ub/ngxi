import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsVerticalExpandResizeBiggerVerticalSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-vertical-expand-resize-bigger-vertical-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V.5m3 3l-3-3l-3 3m6 7l-3 3l-3-3"></svg:path>`,
})
export class StreamlineInterfaceArrowsVerticalExpandResizeBiggerVerticalSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
