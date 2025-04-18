import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxShieldQuarterIcon],svg[bx-shield-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.995 6.9a1 1 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1 1 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a1 1 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014M12 19.897V12H5.51a15.5 15.5 0 0 1-.544-4.365L12 4.118V12h6.46c-.759 2.74-2.498 5.979-6.46 7.897"></svg:path>`,
})
export class BxShieldQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
