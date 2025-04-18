import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenRelationshapeConnect26Icon],svg[garden-relationshape-connect-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.1 15.5V8.1H.4V23h15.1v-7.5zm15.014-2.459l-7.484-2.53l2.53-7.484l7.483 2.53z"></svg:path>`,
})
export class GardenRelationshapeConnect26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
