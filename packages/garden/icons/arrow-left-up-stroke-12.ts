import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowLeftUpStroke12Icon],svg[garden-arrow-left-up-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.854 7.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057l-3-3a.5.5 0 0 1-.057-.638l.057-.07l3-3a.5.5 0 0 1 .765.638l-.057.07L1.706 4H5.5a6.5 6.5 0 0 1 6.5 6.5a.5.5 0 1 1-1 0a5.5 5.5 0 0 0-5.279-5.496L5.5 5H1.708z"></svg:path>`,
})
export class GardenArrowLeftUpStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
