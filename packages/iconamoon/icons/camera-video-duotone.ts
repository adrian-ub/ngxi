import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraVideoDuotoneIcon],svg[iconamoon-camera-video-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M3 6h14v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M3 5h14v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm14 4l2.758-.69A1 1 0 0 1 21 9.28v5.44a1 1 0 0 1-1.242.97L17 15z"></svg:path></svg:g>`,
})
export class IconamoonCameraVideoDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
