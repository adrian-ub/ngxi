import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenRelationshapeTalk26Icon],svg[garden-relationshape-talk-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.8 3.3C3.4 3.3.6 6.5.6 9.5H13c0-3-2.8-6.2-6.2-6.2m8.1 19.9c5.8 0 10.5-4.1 10.5-10.5H4.3c0 6.4 4.8 10.5 10.6 10.5"></svg:path>`,
})
export class GardenRelationshapeTalk26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
