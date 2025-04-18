import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSignpostFill16Icon],svg[garden-signpost-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0h1.96v2H7zm0 11h2v5H7zm5.5-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10.5a.5.5 0 0 1 .35.15l2.65 2.64a1 1 0 0 1 0 1.41l-2.65 2.65a.5.5 0 0 1-.35.15"></svg:path>`,
})
export class GardenSignpostFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
