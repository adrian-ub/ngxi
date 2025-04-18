import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoCompsitionHorizontalCameraHorizontalPanoramaCompositionPhotographyPhotoPicturesIcon],svg[streamline-image-photo-compsition-horizontal-camera-horizontal-panorama-composition-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.81 11.2a.52.52 0 0 0 .47 0a.49.49 0 0 0 .22-.41V3.26a.49.49 0 0 0-.22-.41a.52.52 0 0 0-.47-.05a14.67 14.67 0 0 1-11.62 0a.52.52 0 0 0-.47.05a.49.49 0 0 0-.22.41v7.48a.49.49 0 0 0 .22.41a.52.52 0 0 0 .47 0a14.67 14.67 0 0 1 11.62.05Z"></svg:path>`,
})
export class StreamlineImagePhotoCompsitionHorizontalCameraHorizontalPanoramaCompositionPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
