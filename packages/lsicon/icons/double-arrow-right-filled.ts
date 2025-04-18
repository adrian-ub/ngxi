import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDoubleArrowRightFilledIcon],svg[lsicon-double-arrow-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.293 8L4.146 4.854l.708-.708L8.707 8l-3.853 3.854l-.708-.707zm3 0L7.146 4.854l.708-.708L11.707 8l-3.853 3.854l-.708-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDoubleArrowRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
