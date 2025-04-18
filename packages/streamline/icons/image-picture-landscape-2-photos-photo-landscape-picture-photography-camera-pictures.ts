import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePictureLandscape2PhotosPhotoLandscapePicturePhotographyCameraPicturesIcon],svg[streamline-image-picture-landscape-2-photos-photo-landscape-picture-photography-camera-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M.5 11h13m-9.66 0l5.21-4.88a.5.5 0 0 1 .64 0l3.81 2.73"></svg:path><svg:circle cx="4.5" cy="4.5" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineImagePictureLandscape2PhotosPhotoLandscapePicturePhotographyCameraPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
