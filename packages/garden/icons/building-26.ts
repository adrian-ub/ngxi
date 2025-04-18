import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBuilding26Icon],svg[garden-building-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm4 2v3h3V6zm0 5v3h3v-3zm5-5v3h3V6zm0 5v3h3v-3z"></svg:path>`,
})
export class GardenBuilding26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
