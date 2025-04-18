import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoPolaroidPhotosPolaroidPictureCameraPhotographyPhotoPicturesIcon],svg[streamline-image-photo-polaroid-photos-polaroid-picture-camera-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="9" height="9" x=".5" y=".5" rx="1" transform="rotate(180 5 5)"></svg:rect><svg:path d="m12 4.7l.78.25a1 1 0 0 1 .64 1.27l-2.18 6.59a1 1 0 0 1-1.26.64L5.56 12M.5 7h9"></svg:path></svg:g>`,
})
export class StreamlineImagePhotoPolaroidPhotosPolaroidPictureCameraPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
