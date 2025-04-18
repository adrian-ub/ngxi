import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBrailleDeIcon],svg[arcticons-braille-de-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.55 6.7c4.446 0 8.048 3.603 8.048 8.05s-3.602 8.05-8.049 8.05S5.5 19.195 5.5 14.75S9.103 6.7 13.55 6.7m20.9 0c4.447 0 8.05 3.603 8.05 8.05s-3.603 8.05-8.05 8.05s-8.048-3.604-8.048-8.05S30.004 6.7 34.45 6.7M24 25.2a8.05 8.05 0 1 1-.001 16.099A8.05 8.05 0 0 1 24 25.2"></svg:path>`,
})
export class ArcticonsBrailleDeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
