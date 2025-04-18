import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFlipVertical2LineIcon],svg[ri-flip-vertical-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm5 6l4-4l4 4h-3v4h3l-4 4l-4-4h3v-4z"></svg:path>`,
})
export class RiFlipVertical2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
