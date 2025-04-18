import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDoubleArrowUpOutlineIcon],svg[lsicon-double-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 8.5L8 5l3.5 3.5m-7 3L8 8l3.5 3.5"></svg:path>`,
})
export class LsiconDoubleArrowUpOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
