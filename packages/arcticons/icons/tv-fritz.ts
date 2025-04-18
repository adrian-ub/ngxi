import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTvFritzIcon],svg[arcticons-tv-fritz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37.008" height="25.233" x="5.496" y="9.444" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.682"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.1 38.556h17.8M23.46 18.1v7.92M10 18.1h3.96M10 22.06h2.57M10 18.1v7.92m6.08 0V18.1h2.59a2.66 2.66 0 0 1 0 5.32h-2.59m2.59 0l2.59 2.6m4.35-7.92h5.24m-2.62 7.92V18.1m4.53 0H38l-5.24 7.92H38"></svg:path>`,
})
export class ArcticonsTvFritzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
