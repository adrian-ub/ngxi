import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDoubleArrowLeftFilledIcon],svg[lsicon-double-arrow-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.207 8l3.147-3.146l-.707-.708L3.793 8l3.854 3.854l.707-.707zm3 0l3.147-3.146l-.707-.708L6.792 8l3.853 3.854l.708-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDoubleArrowLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
