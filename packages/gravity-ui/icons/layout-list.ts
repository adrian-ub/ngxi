import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutListIcon],svg[gravity-ui-layout-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.5h1.25v2H2.5V5A1.5 1.5 0 0 1 4 3.5m2.75 2v-2H12A1.5 1.5 0 0 1 13.5 5v.5zM2.5 7h2.75v2H2.5zm0 3.5v.5A1.5 1.5 0 0 0 4 12.5h1.25v-2zm4.25 0v2H12a1.5 1.5 0 0 0 1.5-1.5v-.5zM13.5 9V7H6.75v2zM1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
