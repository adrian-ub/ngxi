import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbon3dCurveManualIcon],svg[carbon-3d-curve-manual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 21a3 3 0 0 1-3 3h-.1a5 5 0 1 0 0 2h.1a5 5 0 0 0 5-5zm-8 7a3 3 0 1 1 3-3a3 3 0 0 1-3 3z" fill="currentColor"></svg:path><svg:path d="M15 13h2v6h-2z" fill="currentColor"></svg:path><svg:path d="M25 2a5 5 0 0 0-4.9 4H20a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3h.1A5 5 0 1 0 25 2zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3z" fill="currentColor"></svg:path>`,
})
export class Carbon3dCurveManualIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
