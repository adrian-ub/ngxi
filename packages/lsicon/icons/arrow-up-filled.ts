import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconArrowUpFilledIcon],svg[lsicon-arrow-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.979 2.021l3.853 3.854l-.707.707l-2.646-2.646v9.043h-1V3.936L4.832 6.582l-.707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconArrowUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
