import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCloudIcon],svg[el-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M983.888 575.377c187.925-18.507 293.084 231.644 148.656 358.546H49.759C-89.529 697.252 82.314 382.276 333.563 443.401C535.007 115.536 908.131 291.199 983.88 575.377z"></svg:path>`,
})
export class ElCloudIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
