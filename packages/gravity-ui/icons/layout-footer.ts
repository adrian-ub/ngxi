import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutFooterIcon],svg[gravity-ui-layout-footer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 12.5h8a1.5 1.5 0 0 0 1.5-1.5v-.5h-11v.5A1.5 1.5 0 0 0 4 12.5M2.5 9V5A1.5 1.5 0 0 1 4 3.5h8A1.5 1.5 0 0 1 13.5 5v4zM1 11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutFooterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
