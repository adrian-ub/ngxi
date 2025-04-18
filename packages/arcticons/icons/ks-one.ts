import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKsOneIcon],svg[arcticons-ks-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.378 38.052c-7.728 0-13.993-6.265-13.993-13.994s6.265-13.993 13.993-13.993c3.264 0 6.267 1.117 8.647 2.99"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.019 3.404q.333 0 .663.01C32.75 3.764 41.615 12.847 41.615 24c0 11.375-9.221 20.596-20.596 20.596c-5.167 0-9.89-1.903-13.506-5.046"></svg:path>`,
})
export class ArcticonsKsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
