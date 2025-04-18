import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiPowerIcon],svg[gravity-ui-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 1.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0zM4.92 3.442A.75.75 0 1 0 4.08 2.2a7 7 0 1 0 7.841 0a.75.75 0 1 0-.841 1.242a5.5 5.5 0 1 1-6.159 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiPowerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
