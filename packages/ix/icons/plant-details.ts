import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlantDetailsIcon],svg[ix-plant-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 127.999h341.334v256H85.333zM42.667 426.665V85.332h426.666v341.333zm64-268.19h32v86.857l42.666-32v32l53.334-32v85.333h-128zM384 170.665v32H277.333v-32zm0 96v-32H277.333v32zm0 64v-32H277.333v32z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlantDetailsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
