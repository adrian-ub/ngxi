import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImageCameraSettingPinPhotosCameraMapPhotographyPicturesMapsSettingsPinPhotoIcon],svg[streamline-image-camera-setting-pin-photos-camera-map-photography-pictures-maps-settings-pin-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 3.5a1 1 0 0 0-1-1h-2L9 .5H5l-1.5 2h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3l2.5 4l2.5-4h3a1 1 0 0 0 1-1Z"></svg:path><svg:circle cx="7" cy="5.5" r="2"></svg:circle></svg:g>`,
})
export class StreamlineImageCameraSettingPinPhotosCameraMapPhotographyPicturesMapsSettingsPinPhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
