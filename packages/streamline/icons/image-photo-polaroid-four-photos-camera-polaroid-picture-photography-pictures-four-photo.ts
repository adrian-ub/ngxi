import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoPolaroidFourPhotosCameraPolaroidPicturePhotographyPicturesFourPhotoIcon],svg[streamline-image-photo-polaroid-four-photos-camera-polaroid-picture-photography-pictures-four-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5.25" height="5.25" x=".5" y=".5" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x="8.25" y=".5" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x=".5" y="8.25" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x="8.25" y="8.25" rx=".5"></svg:rect><svg:path d="M.5 3.5h5.25m2.5 0h5.25m-5.25 7.75h5.25m-13 0h5.25"></svg:path></svg:g>`,
})
export class StreamlineImagePhotoPolaroidFourPhotosCameraPolaroidPicturePhotographyPicturesFourPhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
