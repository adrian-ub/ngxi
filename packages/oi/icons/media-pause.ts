import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMediaPauseIcon],svg[oi-media-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v6h2V1zm4 0v6h2V1z"></svg:path>`,
})
export class OiMediaPauseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
