import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPagerdutyIcon],svg[arcticons-pagerduty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.558 33.113h5.713V43.5h-5.713zM32.074 6.404C29.007 4.772 26.881 4.5 21.86 4.5h-11.3v23.642h11.253c4.476 0 7.815-.272 10.758-2.225c3.215-2.127 4.872-5.664 4.872-9.744c0-4.427-2.053-7.963-5.367-9.769zm-8.952 16.793h-6.85V9.57l6.454-.05c5.886-.074 8.829 2.003 8.829 6.702c0 5.045-3.636 6.974-8.433 6.974z"></svg:path>`,
})
export class ArcticonsPagerdutyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
