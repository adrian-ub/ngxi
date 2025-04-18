import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMediaStopIcon],svg[oi-media-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v6h6V1z"></svg:path>`,
})
export class OiMediaStopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
