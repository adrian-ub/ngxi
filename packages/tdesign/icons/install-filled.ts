import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInstallFilledIcon],svg[tdesign-install-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9.11V2h-2v7.11L8.492 6.63L7.086 8.052L12 12.91l4.914-4.858l-1.406-1.422z"></svg:path><svg:path fill="currentColor" d="M9 2H2v20h20V2h-7v2h5v10H4V4h5zm-.998 14.998v2.004H5.998v-2.004zm3 0v2.004H8.998v-2.004z"></svg:path>`,
})
export class TdesignInstallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
