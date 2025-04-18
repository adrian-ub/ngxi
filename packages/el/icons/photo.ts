import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elPhotoIcon],svg[el-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 30.981v1138.037h1200V30.981zm148.096 143.556h903.809v624.097H148.096z"></svg:path>`,
})
export class ElPhotoIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
