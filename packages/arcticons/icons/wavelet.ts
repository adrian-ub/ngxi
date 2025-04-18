import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWaveletIcon],svg[arcticons-wavelet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 23.268a20.6 20.6 0 0 1-4.592-4.725s-.865 21.363-5.857 21.363c-5.99 0-2.862-31.812-9.051-31.812s-3.061 31.812-9.051 31.812c-4.992 0-5.857-21.363-5.857-21.363A20.6 20.6 0 0 1 4.5 23.268"></svg:path>`,
})
export class ArcticonsWaveletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
