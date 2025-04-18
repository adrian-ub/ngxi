import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPaintLineIcon],svg[ri-paint-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.228 18.732l1.767-1.767l1.768 1.767a2.5 2.5 0 1 1-3.535 0M8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.415l-8.485 8.485a1 1 0 0 1-1.414 0l-8.485-8.485a1 1 0 0 1 0-1.415l7.778-7.778l-2.122-2.121zM11 6.03L3.929 13.1l7.07 7.072l7.072-7.071z"></svg:path>`,
})
export class RiPaintLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
