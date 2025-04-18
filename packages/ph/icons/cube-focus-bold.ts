import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCubeFocusBoldIcon],svg[ph-cube-focus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 48v40a12 12 0 0 1-24 0V60h-28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12M72 196H44v-28a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24m152-40a12 12 0 0 0-12 12v28h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M32 100a12 12 0 0 0 12-12V60h28a12 12 0 0 0 0-24H32a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12m158 70.42l-56 32a12 12 0 0 1-11.9 0l-56-32A12 12 0 0 1 60 160V96a12 12 0 0 1 6-10.42l56-32a12 12 0 0 1 11.9 0l56 32A12 12 0 0 1 196 96v64a12 12 0 0 1-6 10.42M96.19 96L128 114.18L159.81 96L128 77.82ZM84 153l32 18.28V135l-32-18.32Zm88 0v-36.32L140 135v36.36Z"></svg:path>`,
})
export class PhCubeFocusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
