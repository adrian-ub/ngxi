import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciTextAlignCenterIcon],svg[ci-text-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 18H7m13-4H4m13-4H7m13-4H4"></svg:path>`,
})
export class CiTextAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
