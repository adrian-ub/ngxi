import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBuildingStroke12Icon],svg[garden-building-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10 .5H2c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5V9c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v2c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5V1c0-.3-.2-.5-.5-.5z"></svg:path><svg:path fill="currentColor" d="M3 5h2v2H3zm4 0h2v2H7zM3 2h2v2H3zm4 0h2v2H7z"></svg:path>`,
})
export class GardenBuildingStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
