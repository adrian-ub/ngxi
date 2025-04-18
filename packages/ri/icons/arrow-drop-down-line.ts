import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowDropDownLineIcon],svg[ri-arrow-drop-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z"></svg:path>`,
})
export class RiArrowDropDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
