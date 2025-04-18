import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMicroscopeObservationScieneIcon],svg[streamline-microscope-observation-sciene-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 2.5H6v4c0 .554-.446 1.005-1 1.012l-1.46.017A1.03 1.03 0 0 1 2.5 6.5v0zm.75 0v-2h2v2M6 5.059h1.523a3.22 3.22 0 0 1 3.22 3.22V11H13.5V8.309a5.8 5.8 0 0 0-5.802-5.802H6M5.5 11v.5c0 .667-.8 2-2 2h10V11h-12m2.281 2.5H.5"></svg:path>`,
})
export class StreamlineMicroscopeObservationScieneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
