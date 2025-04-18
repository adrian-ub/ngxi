import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitAngleDoubleRightIcon],svg[uit-angle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.353 8.147a.5.5 0 0 0-.707.707L9.793 12l-3.147 3.146a.5.5 0 1 0 .707.708l3.5-3.5a.5.5 0 0 0 0-.707zm9.5 3.5l-3.5-3.5a.5.5 0 0 0-.707.707L15.793 12l-3.147 3.146a.5.5 0 1 0 .707.708l3.5-3.5a.5.5 0 0 0 0-.707"></svg:path>`,
})
export class UitAngleDoubleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
