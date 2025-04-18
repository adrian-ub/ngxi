import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhKUpperCaseIcon],svg[whh-k-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 320q0 56-23 106t-64 86q41 36 64 86t23 106v256q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5V704q0-53-37.5-90.5T512 576H128v384q0 27-18.5 45.5t-45 18.5t-45.5-18.5T0 960V64q0-26 19-45T64.5 0t45 18.5T128 64v384h384q53 0 90.5-37.5T640 320V64q0-26 19-45t45.5-19t45 19T768 64z"></svg:path>`,
})
export class WhhKUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
