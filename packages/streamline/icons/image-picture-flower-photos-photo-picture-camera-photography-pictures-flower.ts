import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePictureFlowerPhotosPhotoPictureCameraPhotographyPicturesFlowerIcon],svg[streamline-image-picture-flower-photos-photo-picture-camera-photography-pictures-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M10 6.5a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V4.31a.5.5 0 0 1 .72-.45L7 5l2.28-1.14a.5.5 0 0 1 .72.45Zm-3 3v4m0 0L9.5 11M7 13.5L4.5 11"></svg:path></svg:g>`,
})
export class StreamlineImagePictureFlowerPhotosPhotoPictureCameraPhotographyPicturesFlowerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
