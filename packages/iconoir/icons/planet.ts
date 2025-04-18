import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPlanetIcon],svg[iconoir-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path d="M17.5 6.348c2.297-.538 3.945-.476 4.338.312c.73 1.466-3.158 4.89-8.686 7.645c-5.529 2.757-10.603 3.802-11.334 2.336c-.392-.786.544-2.134 2.349-3.64"></svg:path></svg:g>`,
})
export class IconoirPlanetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
