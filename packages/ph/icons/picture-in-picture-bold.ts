import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPictureInPictureBoldIcon],svg[ph-picture-in-picture-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20M44 68h168v48h-76a12 12 0 0 0-12 12v60H44Zm104 120v-48h64v48Z"></svg:path>`,
})
export class PhPictureInPictureBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
