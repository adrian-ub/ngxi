import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneGavelIcon],svg[ic-twotone-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h12v2H1zM5.24 8.07l2.83-2.83l14.14 14.14l-2.83 2.83zM12.32 1l5.66 5.66l-2.83 2.83l-5.66-5.66zM3.83 9.48l5.66 5.66l-2.83 2.83L1 12.31z"></svg:path>`,
})
export class IcTwotoneGavelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
