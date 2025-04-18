import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowLeftBoldIcon],svg[solar-map-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.503 20.835l-16.51-7.363c-1.324-.59-1.324-2.354 0-2.944l16.51-7.363c1.495-.667 3.047.814 2.306 2.202l-3.152 5.904c-.245.459-.245 1 0 1.458l3.152 5.904c.74 1.388-.81 2.87-2.306 2.202"></svg:path>`,
})
export class SolarMapArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
