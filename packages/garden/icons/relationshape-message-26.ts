import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenRelationshapeMessage26Icon],svg[garden-relationshape-message-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4.9" cy="7.4" r="4.4" fill="currentColor"></svg:circle><svg:circle cx="18" cy="15.5" r="7.5" fill="currentColor"></svg:circle>`,
})
export class GardenRelationshapeMessage26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
