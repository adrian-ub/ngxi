import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUpFilledIcon],svg[lsicon-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 5.293l3.854 3.853l-.707.708L8 6.707L4.854 9.854l-.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
