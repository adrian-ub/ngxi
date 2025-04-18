import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBuildingFill12Icon],svg[garden-building-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0H2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1.5c.28 0 .5-.22.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28.22.5.5.5H10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1M5 7H3V5h2zm0-3H3V2h2zm4 3H7V5h2zm0-3H7V2h2z"></svg:path>`,
})
export class GardenBuildingFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
