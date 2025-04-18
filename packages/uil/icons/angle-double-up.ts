import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAngleDoubleUpIcon],svg[uil-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.71 12.54a1 1 0 0 0-1.42 0l-3 3A1 1 0 0 0 9.71 17L12 14.66L14.29 17a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Zm-3-1.08L12 9.16l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 1.42 1.42"></svg:path>`,
})
export class UilAngleDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
