import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAngleDoubleLeftIcon],svg[uil-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.46 8.29a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.16 12l2.3-2.29a1 1 0 0 0 0-1.42m3.2 3.71L17 9.71a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class UilAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
