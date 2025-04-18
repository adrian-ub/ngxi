import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAsteriskStroke12Icon],svg[garden-asterisk-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M5.5 1v10M1 3.5l9 5m-9 0l9-5"></svg:path>`,
})
export class GardenAsteriskStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
