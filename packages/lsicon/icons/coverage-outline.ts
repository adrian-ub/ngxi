import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCoverageOutlineIcon],svg[lsicon-coverage-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M10 6.41L13.5 8L8 10.5L2.5 8L6 6.41m4 3L13.5 11L8 13.5L2.5 11L6 9.41M8 2.5L2.5 5L8 7.5L13.5 5z"></svg:path>`,
})
export class LsiconCoverageOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
