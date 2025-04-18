import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenRelationshapeExplore26Icon],svg[garden-relationshape-explore-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.6 22.9l8.7-15l8.7 15zM16.8 13V3.1l8.6 5z"></svg:path>`,
})
export class GardenRelationshapeExplore26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
