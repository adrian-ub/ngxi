import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCheckDoubleIcon],svg[tdesign-check-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.657 7.171l-5.303 5.304l-1.414-1.415l5.303-5.303zm5.657 0L12.708 17.778l-6.364-6.364L7.758 10l4.95 4.95L21.9 5.757zM2.101 10l4.95 4.95l.353-.354l1.414 1.414l-1.768 1.768l-6.363-6.364z"></svg:path>`,
})
export class TdesignCheckDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
