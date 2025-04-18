import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elPhotoAltIcon],svg[el-photo-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M278.027 294.653h643.945v610.693H278.027zm79.468 77.051v334.863h485.01V371.704z"></svg:path>`,
})
export class ElPhotoAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
