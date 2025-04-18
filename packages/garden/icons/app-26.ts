import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenApp26Icon],svg[garden-app-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m4 8l9-5l9 5v9.7L13 23l-9-5.2zm9 5L4 8m9 5l9-5m-9 5v10"></svg:path>`,
})
export class GardenApp26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
