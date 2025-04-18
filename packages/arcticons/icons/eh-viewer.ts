import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEhViewerIcon],svg[arcticons-eh-viewer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.981 16.481v15.038m0-6.203a3.76 3.76 0 0 1 3.76-3.76h0a3.76 3.76 0 0 1 3.759 3.76v6.203M14.5 24h4.902m2.617 7.519H14.5V16.481h7.519"></svg:path>`,
})
export class ArcticonsEhViewerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
