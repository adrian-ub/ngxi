import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBuildingStroke16Icon],svg[garden-building-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13 .5H3c-.3 0-.5.2-.5.5v14c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5v-3c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v3c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5V1c0-.3-.2-.5-.5-.5z"></svg:path><svg:path fill="currentColor" d="M5 7h2v2H5zm4 0h2v2H9zM5 3h2v2H5zm4 0h2v2H9z"></svg:path>`,
})
export class GardenBuildingStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
