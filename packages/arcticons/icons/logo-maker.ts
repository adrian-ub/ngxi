import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLogoMakerIcon],svg[arcticons-logo-maker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 13.173V34.82h13.448M7.249 13.173V34.82m15.011.007V18.07l12.086 16.756M22.168 13.298l15.665 21.527m-4.999-6.869L43.5 13.298v21.527"></svg:path>`,
})
export class ArcticonsLogoMakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
