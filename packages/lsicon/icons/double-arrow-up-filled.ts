import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDoubleArrowUpFilledIcon],svg[lsicon-double-arrow-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 4.293l3.854 3.853l-.707.708L8 5.707L4.854 8.854l-.708-.708zm0 3l3.854 3.853l-.707.708L8 8.707l-3.146 3.147l-.708-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDoubleArrowUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
