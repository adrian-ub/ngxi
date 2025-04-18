import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonal1ExpandSmallerRetractBiggerBigSmallDiagonalIcon],svg[streamline-interface-arrows-diagonal-1-expand-smaller-retract-bigger-big-small-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13m-4 0h4v4m-9 9h-4v-4"></svg:path>`,
})
export class StreamlineInterfaceArrowsDiagonal1ExpandSmallerRetractBiggerBigSmallDiagonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
