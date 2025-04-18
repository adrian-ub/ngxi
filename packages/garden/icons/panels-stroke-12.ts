import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPanelsStroke12Icon],svg[garden-panels-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M10 11.5H2c-.3 0-.5-.2-.5-.5V1c0-.3.2-.5.5-.5h8c.3 0 .5.2.5.5v10c0 .3-.2.5-.5.5zM5.5.5v11m-4-3h4m0-5h5"></svg:path>`,
})
export class GardenPanelsStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
