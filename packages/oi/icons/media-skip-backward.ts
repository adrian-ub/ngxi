import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMediaSkipBackwardIcon],svg[oi-media-skip-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1L0 4l4 3zm0 3l4 3V1z"></svg:path>`,
})
export class OiMediaSkipBackwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
