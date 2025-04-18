import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirGasTankDropletIcon],svg[iconoir-gas-tank-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="1.5" clip-rule="evenodd"><svg:path stroke-width="1.493" d="M3 7.562A2.56 2.56 0 0 1 5.563 5H7V3h5v2h2.002A7 7 0 0 1 21 11.998v6.442a2.56 2.56 0 0 1-2.563 2.562H5.563A2.565 2.565 0 0 1 3 18.44z"></svg:path><svg:path d="M12 9s3 2.993 3 4.887c0 1.655-1.345 3-3 3s-2.988-1.345-3-3C9.01 11.992 12 9 12 9"></svg:path></svg:g>`,
})
export class IconoirGasTankDropletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
