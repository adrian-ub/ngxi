import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImageCamera1PhotosPictureCameraPhotographyPhotoPicturesIcon],svg[streamline-image-camera-1-photos-picture-camera-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5a1 1 0 0 0-1-1h-2L9 2H5L3.5 4h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1Z"></svg:path><svg:circle cx="7" cy="7.5" r="2.25"></svg:circle></svg:g>`,
})
export class StreamlineImageCamera1PhotosPictureCameraPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
