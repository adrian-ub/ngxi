import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCameraImageThinIcon],svg[iconamoon-camera-image-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:circle cx="12" cy="12" r="3" stroke-linecap="round"></svg:circle><svg:path stroke-linecap="round" d="M17 2h2"></svg:path></svg:g>`,
})
export class IconamoonCameraImageThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
