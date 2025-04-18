import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectAlignCenterHorizontalIcon],svg[gravity-ui-object-align-center-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 7v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1m-1-2.5A2.5 2.5 0 0 1 14.5 7v2a2.5 2.5 0 0 1-2.5 2.5H8.75v2.75a.75.75 0 0 1-1.5 0V11.5H4A2.5 2.5 0 0 1 1.5 9V7A2.5 2.5 0 0 1 4 4.5h3.25V1.75a.75.75 0 1 1 1.5 0V4.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectAlignCenterHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
