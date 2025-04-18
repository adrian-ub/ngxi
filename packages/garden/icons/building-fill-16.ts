import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBuildingFill16Icon],svg[garden-building-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h2.5c.28 0 .5-.22.5-.5v-4c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v4c0 .28.22.5.5.5H13c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1M7 9H5V7h2zm0-4H5V3h2zm4 4H9V7h2zm0-4H9V3h2z"></svg:path>`,
})
export class GardenBuildingFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
