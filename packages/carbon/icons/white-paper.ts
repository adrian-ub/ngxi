import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWhitePaperIcon],svg[carbon-white-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 27.18l-2.59-2.59L18 26l4 4l8-8l-1.41-1.41zM9 17h7v2H9zm0-5h12v2H9zm0-5h12v2H9z"></svg:path><svg:path fill="currentColor" d="M16 30H6c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h18c1.103 0 2 .897 2 2v15h-2V4H6v24h10z"></svg:path>`,
})
export class CarbonWhitePaperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
