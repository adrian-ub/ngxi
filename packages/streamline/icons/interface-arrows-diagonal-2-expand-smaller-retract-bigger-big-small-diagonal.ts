import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonal2ExpandSmallerRetractBiggerBigSmallDiagonalIcon],svg[streamline-interface-arrows-diagonal-2-expand-smaller-retract-bigger-big-small-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5.5h-4v4m0-4l13 13m-4 0h4v-4"></svg:path>`,
})
export class StreamlineInterfaceArrowsDiagonal2ExpandSmallerRetractBiggerBigSmallDiagonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
