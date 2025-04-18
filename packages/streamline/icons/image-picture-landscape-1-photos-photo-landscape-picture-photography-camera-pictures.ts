import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePictureLandscape1PhotosPhotoLandscapePicturePhotographyCameraPicturesIcon],svg[streamline-image-picture-landscape-1-photos-photo-landscape-picture-photography-camera-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7.005 7)"></svg:rect><svg:circle cx="9.25" cy="4.75" r="1.75"></svg:circle><svg:path d="M9.4 13.5a7.36 7.36 0 0 0-7.4-6a7.88 7.88 0 0 0-1.5.14"></svg:path><svg:path d="M13.5 9.91A7.8 7.8 0 0 0 11 9.5a7.89 7.89 0 0 0-3.13.64"></svg:path></svg:g>`,
})
export class StreamlineImagePictureLandscape1PhotosPhotoLandscapePicturePhotographyCameraPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
