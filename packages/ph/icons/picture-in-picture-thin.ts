import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPictureInPictureThinIcon],svg[ph-picture-in-picture-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12M36 192V64a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v60h-84a4 4 0 0 0-4 4v68H40a4 4 0 0 1-4-4m180 4h-76v-64h80v60a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhPictureInPictureThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
