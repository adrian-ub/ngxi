import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLandingIcon],svg[picon-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h8v1H0m0-6l1-2l1 1v1l2 1l1-2l1 1v2l2 1v1H7L1 3"></svg:path>`,
})
export class PiconLandingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
