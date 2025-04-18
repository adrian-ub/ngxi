import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDoubleArrowDownFilledIcon],svg[lsicon-double-arrow-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m11.497 7.554l-3.5 3.5l-3.5-3.5m7-3l-3.5 3.5l-3.5-3.5"></svg:path>`,
})
export class LsiconDoubleArrowDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
