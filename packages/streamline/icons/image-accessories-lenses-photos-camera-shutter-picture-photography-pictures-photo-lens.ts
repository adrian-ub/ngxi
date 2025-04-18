import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImageAccessoriesLensesPhotosCameraShutterPicturePhotographyPicturesPhotoLensIcon],svg[streamline-image-accessories-lenses-photos-camera-shutter-picture-photography-pictures-photo-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:circle cx="7" cy="7" r="2.5"></svg:circle><svg:path d="M4.5 7V1M7 4.5h6M9.5 7v6M7 9.5H1"></svg:path></svg:g>`,
})
export class StreamlineImageAccessoriesLensesPhotosCameraShutterPicturePhotographyPicturesPhotoLensIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
