import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteDropletBottleOutlineIcon],svg[flowbite-droplet-bottle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6h6m-5-3v6c-2 1.5-3 3.5-3 5.5V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4.5c0-2-1-4-3-5.5V3zm4 13a2 2 0 1 1-4 0c0-1.105 1.885-4 2-4s2 2.895 2 4"></svg:path>`,
})
export class FlowbiteDropletBottleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
