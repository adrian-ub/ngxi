import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconArrowDownFilledIcon],svg[lsicon-arrow-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.479 12.064V3.021h1v9.043l2.646-2.646l.707.707l-3.853 3.854l-3.854-3.854l.707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconArrowDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
