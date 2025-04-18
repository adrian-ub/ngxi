import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenRelationshapeChat26Icon],svg[garden-relationshape-chat-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.3 5.4c4.9 4.9 4.9 12.7 0 17.6L.5 14.2zm9.9 10c-3.4-3.4-3.4-9 0-12.4l6.2 6.2z"></svg:path>`,
})
export class GardenRelationshapeChat26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
