import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShareStroke12Icon],svg[garden-share-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M7.5 4.5H10c.3 0 .5.2.5.5v6c0 .3-.2.5-.5.5H1c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h2.5m2 3V1m-2 1.5L5.1.9c.2-.2.5-.2.7 0l1.6 1.6"></svg:path>`,
})
export class GardenShareStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
