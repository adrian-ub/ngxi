import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiGripHorizontalIcon],svg[gravity-ui-grip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6.5 1.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0-5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-5 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M13 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1.5-3.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGripHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
