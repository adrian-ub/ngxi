import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStreetsBoldDuotoneIcon],svg[solar-streets-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.012 4.048l-7.952 7.951l7.952 7.952C22 18.455 22 16.134 22 12s0-6.455-.988-7.951M12 13.06l-7.952 7.952C5.544 22 7.866 22 11.999 22c4.135 0 6.456 0 7.952-.988z"></svg:path><svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.134 0 6.455.988 7.952L19.952 2.988C18.455 2 16.134 2 12 2C7.286 2 4.929 2 3.464 3.464" opacity=".5"></svg:path>`,
})
export class SolarStreetsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
