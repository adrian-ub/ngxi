import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFaceSadStroke16Icon],svg[garden-face-sad-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3.674-3.031a.5.5 0 0 1-.643-.295C10.64 10.618 9.396 10 8 10s-2.639.618-3.031 1.674a.5.5 0 1 1-.938-.348C4.631 9.715 6.392 9 8 9s3.37.715 3.969 2.326a.5.5 0 0 1-.295.643"></svg:path>`,
})
export class GardenFaceSadStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
