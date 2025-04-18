import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRightSquareOutlineIcon],svg[lsicon-right-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 4v8m0-7.5H9a1.5 1.5 0 1 1 0 3H5.5m2 0S10 11 10 12m3.5 1V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5Z"></svg:path>`,
})
export class LsiconRightSquareOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
