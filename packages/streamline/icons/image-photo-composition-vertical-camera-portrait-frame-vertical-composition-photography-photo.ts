import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoCompositionVerticalCameraPortraitFrameVerticalCompositionPhotographyPhotoIcon],svg[streamline-image-photo-composition-vertical-camera-portrait-frame-vertical-composition-photography-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.2 1.19a.52.52 0 0 0 0-.47a.49.49 0 0 0-.46-.22H3.26a.49.49 0 0 0-.41.22a.52.52 0 0 0-.05.47a14.67 14.67 0 0 1 0 11.62a.52.52 0 0 0 .05.47a.49.49 0 0 0 .41.22h7.48a.49.49 0 0 0 .41-.22a.52.52 0 0 0 0-.47a14.67 14.67 0 0 1 .05-11.62Z"></svg:path>`,
})
export class StreamlineImagePhotoCompositionVerticalCameraPortraitFrameVerticalCompositionPhotographyPhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
