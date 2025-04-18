import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCopyStroke16Icon],svg[garden-copy-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 10a.5.5 0 1 1 0 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2.5a.5.5 0 1 1-1 0V1H1v9zM6 6v9h9V6zm0-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1"></svg:path>`,
})
export class GardenCopyStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
