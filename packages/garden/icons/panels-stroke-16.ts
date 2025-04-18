import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPanelsStroke16Icon],svg[garden-panels-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M14 15.5H2c-.3 0-.5-.2-.5-.5V1c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v14c0 .3-.2.5-.5.5zM7.5.5v15m-6-4h6m0-7h7"></svg:path>`,
})
export class GardenPanelsStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
