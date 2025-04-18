import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSignpostFill12Icon],svg[garden-signpost-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0h2v1H5zm0 8h2v4H5zm4.29-1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7.29a1 1 0 0 1 .71.29l1.5 1.5a1 1 0 0 1 0 1.41L10 6.71a1 1 0 0 1-.71.29"></svg:path>`,
})
export class GardenSignpostFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
