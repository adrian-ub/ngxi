import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpand2ExpandSmallerRetractBiggerBigSmallDiagonalIcon],svg[streamline-interface-arrows-expand-2-expand-smaller-retract-bigger-big-small-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 5.5l-5-5m4 0h-4v4m8 4l5 5m-4 0h4v-4"></svg:path>`,
})
export class StreamlineInterfaceArrowsExpand2ExpandSmallerRetractBiggerBigSmallDiagonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
