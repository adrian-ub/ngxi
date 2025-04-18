import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImageCameraTripodTripodPhotosPictureCameraPhotographyPhotoPicturesIcon],svg[streamline-image-camera-tripod-tripod-photos-picture-camera-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 8.5v5m0-5l-4.5 5m4.5-5l4.5 5"></svg:path><svg:rect width="11" height="8" x="1.5" y=".5" rx="1"></svg:rect><svg:circle cx="7" cy="4.5" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineImageCameraTripodTripodPhotosPictureCameraPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
