import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciSmallLongRightIcon],svg[ci-small-long-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8v3H2v2h16v3l4-4l-4-4Z"></svg:path>`,
})
export class CiSmallLongRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
