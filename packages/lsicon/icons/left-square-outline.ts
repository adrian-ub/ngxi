import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLeftSquareOutlineIcon],svg[lsicon-left-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 4v7.5H11m2.5 1.5V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5Z"></svg:path>`,
})
export class LsiconLeftSquareOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
