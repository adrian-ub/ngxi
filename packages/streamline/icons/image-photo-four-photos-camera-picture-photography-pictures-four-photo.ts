import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoFourPhotosCameraPicturePhotographyPicturesFourPhotoIcon],svg[streamline-image-photo-four-photos-camera-picture-photography-pictures-four-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5" height="5" x=".5" y=".5" rx=".5"></svg:rect><svg:rect width="5" height="5" x="8.5" y=".5" rx=".5"></svg:rect><svg:rect width="5" height="5" x=".5" y="8.5" rx=".5"></svg:rect><svg:rect width="5" height="5" x="8.5" y="8.5" rx=".5"></svg:rect></svg:g>`,
})
export class StreamlineImagePhotoFourPhotosCameraPicturePhotographyPicturesFourPhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
