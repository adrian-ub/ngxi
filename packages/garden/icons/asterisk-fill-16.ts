import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAsteriskFill16Icon],svg[garden-asterisk-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 1v14M2 4.5l12 7m-12 0l12-7"></svg:path>`,
})
export class GardenAsteriskFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
