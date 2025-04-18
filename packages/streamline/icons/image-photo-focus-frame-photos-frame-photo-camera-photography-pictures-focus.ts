import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoFocusFramePhotosFramePhotoCameraPhotographyPicturesFocusIcon],svg[streamline-image-photo-focus-frame-photos-frame-photo-camera-photography-pictures-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2.5" rx="1"></svg:rect><svg:path d="M11 6.5V9H8.5M3 7.5V5h2.5"></svg:path></svg:g>`,
})
export class StreamlineImagePhotoFocusFramePhotosFramePhotoCameraPhotographyPicturesFocusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
