import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCheckboxLineIcon],svg[ri-checkbox-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm6.003 11L6.76 11.757l1.414-1.414l2.829 2.829l5.657-5.657l1.414 1.414z"></svg:path>`,
})
export class RiCheckboxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
