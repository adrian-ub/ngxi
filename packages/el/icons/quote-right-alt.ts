import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elQuoteRightAltIcon],svg[el-quote-right-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 1200c331.371 0 600-268.629 600-600S931.371 0 600 0S0 268.629 0 600s268.629 600 600 600m45.923-282.422L620.142 798.85c75.541-16.721 145.005-38.468 139.38-122.825h-88.77V360.057h267.407v295.314c-.095 234.691-172.401 253.786-292.236 262.207m-358.228 0L261.841 798.85c75.541-16.721 145.005-38.468 139.38-122.825h-88.77V360.057h267.407v295.314c-.094 234.691-172.328 253.786-292.163 262.207"></svg:path>`,
})
export class ElQuoteRightAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
