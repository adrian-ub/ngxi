import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCircleArrowRightIcon],svg[el-circle-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.635 0 0 268.635 0 600s268.635 600 600 600s600-268.635 600-600S931.365 0 600 0m-66.647 297.145L987.667 600L533.353 902.855V739.678h-321.02v-279.34h321.02z"></svg:path>`,
})
export class ElCircleArrowRightIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
