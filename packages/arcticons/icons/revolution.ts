import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRevolutionIcon],svg[arcticons-revolution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.1 6.33a2.56 2.56 0 0 0-2.57 2.56v7.66h-9L8.8 24v15.1a2.56 2.56 0 0 0 2.56 2.58h20.09A2.58 2.58 0 0 0 34 39.11v-7.66h2.6a2.55 2.55 0 0 0 2.57-2.56h0V13.77l4.3-7.44zM34 31.45V19.12a2.57 2.57 0 0 0-2.56-2.57H13.53m5.39 5.02v15.08m5.02-15.08v15.08m5.03-10.05H13.89m15.08 5.02H13.89"></svg:path>`,
})
export class ArcticonsRevolutionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
