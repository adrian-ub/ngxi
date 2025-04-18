import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFlipVertical2FillIcon],svg[ri-flip-vertical-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm4 7l4-4l4 4h-3v4h3l-4 4l-4-4h3v-4z"></svg:path>`,
})
export class RiFlipVertical2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
