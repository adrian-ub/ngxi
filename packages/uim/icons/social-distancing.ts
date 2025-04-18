import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimSocialDistancingIcon],svg[uim-social-distancing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 6 11" opacity=".25"></svg:path><svg:path fill="currentColor" d="M8.64 9.772a3.452 3.452 0 0 1-5.28 0A4.99 4.99 0 0 0 1 14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1a4.99 4.99 0 0 0-2.36-4.228M18 11a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 18 11" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20.64 9.772a3.452 3.452 0 0 1-5.28 0A4.99 4.99 0 0 0 13 14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1a4.99 4.99 0 0 0-2.36-4.228" opacity=".7"></svg:path><svg:path fill="currentColor" d="m21.207 18.293l-2-2a1 1 0 0 0-1.414 1.414l.293.293H15.5a1 1 0 0 0 0 2h2.586l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414M8.5 18H5.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L5.914 20H8.5a1 1 0 0 0 0-2"></svg:path>`,
})
export class UimSocialDistancingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
