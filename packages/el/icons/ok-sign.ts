import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elOkSignIcon],svg[el-ok-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m257.446 281.03l124.657 124.658l-389.354 389.43L468.823 918.97L344.165 794.312l-126.27-126.344l123.853-123.853l126.27 126.343z"></svg:path>`,
})
export class ElOkSignIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
