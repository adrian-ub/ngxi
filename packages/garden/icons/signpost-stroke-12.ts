import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSignpostStroke12Icon],svg[garden-signpost-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 2.5h7.293a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .707l-1.5 1.5a.5.5 0 0 1-.354.147H2a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5z"></svg:path><svg:path fill="currentColor" d="M5 0h2v1H5zm0 8h2v4H5z"></svg:path>`,
})
export class GardenSignpostStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
