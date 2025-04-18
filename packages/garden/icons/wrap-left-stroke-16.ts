import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenWrapLeftStroke16Icon],svg[garden-wrap-left-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 14a.5.5 0 1 1 0-1h13a.5.5 0 1 1 0 1zm9-4a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1zm0-4a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1zM7 4H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m0 1v5H2V5zM1.5 2a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1z"></svg:path>`,
})
export class GardenWrapLeftStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
