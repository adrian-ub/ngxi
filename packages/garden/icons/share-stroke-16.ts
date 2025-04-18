import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShareStroke16Icon],svg[garden-share-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M10.5 6.5H14c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5H1c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5h3.5m3 4V1m-3 2.5L7.1.9c.2-.2.5-.2.7 0l2.6 2.6"></svg:path>`,
})
export class GardenShareStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
