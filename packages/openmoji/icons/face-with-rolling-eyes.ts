import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFaceWithRollingEyesIcon],svg[openmoji-face-with-rolling-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#FCEA2B"></svg:circle><svg:circle cx="46" cy="32" r="6.5" fill="#FFF"></svg:circle><svg:circle cx="26" cy="32" r="6.5" fill="#FFF"></svg:circle><svg:circle cx="46.056" cy="28" r="2.556"></svg:circle><svg:circle cx="26.056" cy="28" r="2.556"></svg:circle><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="46" cy="32" r="6.5" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="26" cy="32" r="6.5" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M31 49.497h10"></svg:path>`,
})
export class OpenmojiFaceWithRollingEyesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
