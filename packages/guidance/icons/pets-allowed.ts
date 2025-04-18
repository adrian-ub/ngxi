import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePetsAllowedIcon],svg[guidance-pets-allowed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M16 22V7.5h1A2.5 2.5 0 0 0 19.5 5V3.5H14A2.5 2.5 0 0 1 11.5 1v3.894a6.74 6.74 0 0 1-3 5.606a6.74 6.74 0 0 0-3 5.606V21.5H5A2.5 2.5 0 0 1 2.5 19v-4m5.5.5h2.5v.5c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5"></svg:path>`,
})
export class GuidancePetsAllowedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
