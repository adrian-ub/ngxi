import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCopyStroke12Icon],svg[garden-copy-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm0 1H5v6h6zM7 0a1 1 0 0 1 1 1v1.5a.5.5 0 0 1-1 0V1H1v6h1.5a.5.5 0 0 1 0 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z"></svg:path>`,
})
export class GardenCopyStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
