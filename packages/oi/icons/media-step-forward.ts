import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMediaStepForwardIcon],svg[oi-media-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v6l5-3zm5 3v3h2V1H5z"></svg:path>`,
})
export class OiMediaStepForwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
