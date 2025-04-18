import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPlanetAltIcon],svg[iconoir-planet-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path d="M19.812 12.99c1.813 1.51 2.755 2.864 2.362 3.651c-.731 1.467-5.805.42-11.333-2.336S1.423 8.126 2.154 6.66c.392-.786 2.033-.85 4.322-.315"></svg:path></svg:g>`,
})
export class IconoirPlanetAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
