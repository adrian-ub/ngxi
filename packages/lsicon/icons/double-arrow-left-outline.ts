import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDoubleArrowLeftOutlineIcon],svg[lsicon-double-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 11.5L4.5 8L8 4.5m3 7L7.5 8L11 4.5"></svg:path>`,
})
export class LsiconDoubleArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
