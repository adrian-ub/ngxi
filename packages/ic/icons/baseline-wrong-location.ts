import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineWrongLocationIcon],svg[ic-baseline-wrong-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10V3.26c-.65-.17-1.32-.26-2-.26c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8c0-.41-.04-.81-.09-1.2zm-2 3c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path><svg:path fill="currentColor" d="m22.54 2.88l-1.42-1.42L19 3.59l-2.12-2.13l-1.42 1.42L17.59 5l-2.13 2.12l1.42 1.42L19 6.41l2.12 2.13l1.42-1.42L20.41 5z"></svg:path>`,
})
export class IcBaselineWrongLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
