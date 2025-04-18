import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDropletCheckIcon],svg[iconoir-droplet-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 21.57A8.132 8.132 0 0 1 6.25 7.75l5.326-5.326a.6.6 0 0 1 .848 0L17.75 7.75A8.13 8.13 0 0 1 19.74 16M16 20l2 2l4-4"></svg:path>`,
})
export class IconoirDropletCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
