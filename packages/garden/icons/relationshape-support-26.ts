import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenRelationshapeSupport26Icon],svg[garden-relationshape-support-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.3 5.2L5.4 2.7l-2.5 8.9l-2.5 8.9l8.9 2.4l2.5-8.8zm-.077 8.931l8.853-2.503l2.503 8.853l-8.853 2.503z"></svg:path>`,
})
export class GardenRelationshapeSupport26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
