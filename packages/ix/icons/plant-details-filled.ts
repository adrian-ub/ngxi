import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlantDetailsFilledIcon],svg[ix-plant-details-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 85.332H42.667v341.333h426.666zM128 127.999H85.333v170.666H256V191.999l-64 32v-32l-64 30.666zm170.667 192h128v42.666h-128zm128-85.334h-128v42.667h128zm-128-85.333h128v42.667h-128z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlantDetailsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
