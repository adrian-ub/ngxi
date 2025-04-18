import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFaceNeutralStroke12Icon],svg[garden-face-neutral-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M4.5 7.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0m-1 0A5 5 0 1 0 1 6a5 5 0 0 0 10 0"></svg:path>`,
})
export class GardenFaceNeutralStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
