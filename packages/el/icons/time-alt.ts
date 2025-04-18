import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elTimeAltIcon],svg[el-time-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.236 175.764C915.665 67.192 765.675 0 600 0C268.651 0 0 268.651 0 600c0 331.35 268.651 600 600 600c331.35 0 600-268.651 600-600c0-165.675-67.192-315.665-175.764-424.236m-121.75 86.328l108.13 108.131l-405.851 405.851l-.052-.053l-.052.053l-284.153-284.153l11.859-11.858l84.05-84.05l12.222-12.221l176.074 176.074z"></svg:path>`,
})
export class ElTimeAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
