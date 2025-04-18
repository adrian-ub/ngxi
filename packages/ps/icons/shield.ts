import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psShieldIcon],svg[ps-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 0H64Q37 0 18.5 18.5T0 64v151q0 65 26.5 124T102 439l90 79l90-79q102-91 102-224V64q0-27-18.5-45.5T320 0m21 215q0 119-87 192l-62 56V43h128q21 0 21 21z"></svg:path>`,
})
export class PsShieldIcon {
  readonly viewBox = input("0 0 384 520")
  readonly width = input("0.74em")
  readonly height = input("1em")
}
