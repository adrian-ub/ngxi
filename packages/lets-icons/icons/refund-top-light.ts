import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRefundTopLightIcon],svg[lets-icons-refund-top-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 4l.354-.354L8 3.293l-.354.353zm11.5 5a.5.5 0 0 0-1 0zm-6.146-.354l-5-5l-.708.708l5 5zm-5.708-5l-5 5l.708.708l5-5zM7.5 4v10.5h1V4zm12 10.5V9h-1v5.5zm-6 6a6 6 0 0 0 6-6h-1a5 5 0 0 1-5 5zm-6-6a6 6 0 0 0 6 6v-1a5 5 0 0 1-5-5z"></svg:path>`,
})
export class LetsIconsRefundTopLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
