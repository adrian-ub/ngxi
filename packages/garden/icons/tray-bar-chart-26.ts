import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTrayBarChart26Icon],svg[garden-tray-bar-chart-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 1.3a1.3 1.3 0 0 0-1.3 1.3v20.8a1.3 1.3 0 0 0 1.3 1.3h3.9a1.3 1.3 0 0 0 1.3-1.3V2.6a1.3 1.3 0 0 0-1.3-1.3zm-8.45 6.5a1.3 1.3 0 0 0-1.3 1.3v14.3a1.3 1.3 0 0 0 1.3 1.3h3.9a1.3 1.3 0 0 0 1.3-1.3V9.1a1.3 1.3 0 0 0-1.3-1.3zM2.6 14.3a1.3 1.3 0 0 0-1.3 1.3v7.8a1.3 1.3 0 0 0 1.3 1.3h3.9a1.3 1.3 0 0 0 1.3-1.3v-7.8a1.3 1.3 0 0 0-1.3-1.3z"></svg:path>`,
})
export class GardenTrayBarChart26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
