import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDropletHalfIcon],svg[iconoir-droplet-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m4.5 16.5l14-6.5m1.5 4c0-4.418-8-12-8-12S4 9.582 4 14a8 8 0 1 0 16 0Z"></svg:path>`,
})
export class IconoirDropletHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
