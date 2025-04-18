import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelLockOpenIcon],svg[pixel-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V3h-1V2h-2V1h-4v1h-2v1h-1v2h-1v6H2v1H1v10h1v1h15v-1h1V12h-1v-1h-4V5h1V4h1V3h4v1h1v1h1v6h2V5zm-6 8v8H3v-8z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
