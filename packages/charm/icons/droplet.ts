import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmDropletIcon],svg[charm-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 9a5.25 5.25 0 1 0 10.5 0C13.25 5.75 8 1.75 8 1.75S2.75 5.75 2.75 9"></svg:path>`,
})
export class CharmDropletIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
