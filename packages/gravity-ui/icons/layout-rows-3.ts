import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutRows3Icon],svg[gravity-ui-layout-rows-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.5H4A1.5 1.5 0 0 0 2.5 5v.5h11V5A1.5 1.5 0 0 0 12 3.5M2.5 9V7h11v2zm0 1.5v.5A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5v-.5zM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutRows3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
