import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImageCamera2PhotosPictureCameraPhotographyPhotoPicturesIcon],svg[streamline-image-camera-2-photos-picture-camera-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="3.75" rx="1"></svg:rect><svg:circle cx="7" cy="8.25" r="2"></svg:circle><svg:path d="M9.5 3.75v-1.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1.5"></svg:path></svg:g>`,
})
export class StreamlineImageCamera2PhotosPictureCameraPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
