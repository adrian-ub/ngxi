import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSigmaIcon],svg[uil-sigma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h-5.59l3.3-3.29a1 1 0 0 0 0-1.42L10.41 8H16a1 1 0 0 0 0-2H8a1 1 0 0 0-.92.62a1 1 0 0 0 .21 1.09l4.3 4.29l-4.3 4.29a1 1 0 0 0-.21 1.09A1 1 0 0 0 8 18h8a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilSigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
