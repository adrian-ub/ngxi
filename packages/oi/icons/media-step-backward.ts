import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMediaStepBackwardIcon],svg[oi-media-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v6h2V1zm2 3l5 3V1z"></svg:path>`,
})
export class OiMediaStepBackwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
