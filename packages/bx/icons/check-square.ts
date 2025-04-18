import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCheckSquareIcon],svg[bx-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.933 13.519l-2.226-2.226l-1.414 1.414l3.774 3.774l5.702-6.84l-1.538-1.282z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M5 19V5h14l.002 14z"></svg:path>`,
})
export class BxCheckSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
