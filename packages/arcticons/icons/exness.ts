import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsExnessIcon],svg[arcticons-exness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.734 28.561c-.988 1.677-2.853 2.806-4.99 2.806h0c-3.173 0-5.744-2.49-5.744-5.56v-3.615c0-3.07 2.571-5.559 5.744-5.559h0c3.172 0 5.744 2.49 5.744 5.56V24H11m26 7.367L25.512 16.634m11.488 0L25.512 31.366"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsExnessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
