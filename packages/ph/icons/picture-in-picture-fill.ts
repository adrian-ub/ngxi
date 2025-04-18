import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPictureInPictureFillIcon],svg[ph-picture-in-picture-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144h-80v-64h80z"></svg:path>`,
})
export class PhPictureInPictureFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
