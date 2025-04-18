import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraVideoFillIcon],svg[iconamoon-camera-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2.72l1.515-.38A2 2 0 0 1 22 9.28v5.44a2 2 0 0 1-2.485 1.94L18 16.28V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm16 9.22l2 .5V9.28l-2 .5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCameraVideoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
