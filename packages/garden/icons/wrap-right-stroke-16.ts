import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenWrapRightStroke16Icon],svg[garden-wrap-right-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 14a.5.5 0 1 0 0-1h-13a.5.5 0 1 0 0 1zm-9-4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1zm0-4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1zM9 4h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m0 1v5h5V5zM1.5 1a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class GardenWrapRightStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
