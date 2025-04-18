import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteDropletBottleAltOutlineIcon],svg[flowbite-droplet-bottle-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v2.5C10 9 7 9.75 7 12v7c0 .938 0 2 2.143 2h5.714C17 21 17 19.938 17 19v-7c0-2.25-3-3-3-3.5V6m-4 0H9V3h6v3h-1m-4 0h4m0 10a2 2 0 1 1-4 0c0-1.5 1.787-4 2-4s2 2.5 2 4"></svg:path>`,
})
export class FlowbiteDropletBottleAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
