import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1RedTrianglePointedUpIcon],svg[noto-v1-red-triangle-pointed-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#db4437" d="M124.81 114.25H3.19c-1.09 0-2.09-.6-2.61-1.55c-.53-.95-.48-2.11.11-3.03L61.5 15.03c1.1-1.7 3.91-1.7 5.01 0l60.81 94.63c.59.92.63 2.08.11 3.03c-.53.96-1.53 1.56-2.62 1.56"></svg:path>`,
})
export class NotoV1RedTrianglePointedUpIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
