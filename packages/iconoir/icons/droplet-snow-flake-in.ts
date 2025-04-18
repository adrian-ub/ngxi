import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDropletSnowFlakeInIcon],svg[iconoir-droplet-snow-flake-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 14c0-4.418-8-12-8-12S4 9.582 4 14a8 8 0 1 0 16 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 10v3.5m0 3.5v-3.5m0 0l-3-1.75m3 1.75l3 1.75m-3-1.75l3-1.75m-3 1.75l-3 1.75"></svg:path></svg:g>`,
})
export class IconoirDropletSnowFlakeInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
