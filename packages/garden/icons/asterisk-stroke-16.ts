import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAsteriskStroke16Icon],svg[garden-asterisk-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M7.5 1.5v14M1.5 5l12 7m-12 0l12-7"></svg:path>`,
})
export class GardenAsteriskStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
