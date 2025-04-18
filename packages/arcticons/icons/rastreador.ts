import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRastreadorIcon],svg[arcticons-rastreador-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.883 31.633a13.41 13.41 0 0 1-17.362-1.364c-5.235-5.236-5.235-13.724 0-18.96s13.724-5.236 18.96 0a13.41 13.41 0 0 1 1.365 17.362l1.495 1.495a15.5 15.5 0 0 0-1.378-20.338c-6.054-6.054-15.87-6.054-21.923 0c-6.054 6.054-6.054 15.87 0 21.923L24 42.712l9.48-9.48z"></svg:path><svg:circle cx="23.999" cy="20.788" r="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.071 27.86l3.891 3.89"></svg:path>`,
})
export class ArcticonsRastreadorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
