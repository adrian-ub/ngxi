import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elWebsiteAltIcon],svg[el-website-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M281.154 301.634h637.653v596.732H281.154zm78.611 77.963V820.44h480.471V379.597zm52.393 56.231H786.55v195.479H412.158zm0 229.369h106.041v106.041H412.158zm134.156 0h106.078v106.041H546.314zm134.157 0H786.55v106.041H680.471z"></svg:path>`,
})
export class ElWebsiteAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
