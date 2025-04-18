import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenRelationshapeGather26Icon],svg[garden-relationshape-gather-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3c0 2.94-2.69 6-6 6S7 5.926 7 3zm5 9c0 6.708-4.923 11-10.993 11S2.015 18.708 2 12z"></svg:path>`,
})
export class GardenRelationshapeGather26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
