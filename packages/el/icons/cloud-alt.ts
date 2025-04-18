import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCloudAltIcon],svg[el-cloud-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.635 0 0 268.635 0 600s268.635 600 600 600s600-268.635 600-600S931.365 0 600 0m5.347 311.938c112.641-2.458 224.208 89.791 256.494 210.944c128.177-12.623 199.88 157.997 101.366 244.557H224.7c-94.99-161.431 22.206-376.261 193.577-334.58C469.8 349 537.753 313.412 605.33 311.936z"></svg:path>`,
})
export class ElCloudAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
