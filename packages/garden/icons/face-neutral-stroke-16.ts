import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFaceNeutralStroke16Icon],svg[garden-face-neutral-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 7A7 7 0 1 0 8 1a7 7 0 0 0 0 14M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5.25 4.5a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class GardenFaceNeutralStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
