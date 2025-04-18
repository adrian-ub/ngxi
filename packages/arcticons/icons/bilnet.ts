import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBilnetIcon],svg[arcticons-bilnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.286 31.84c2.4 3.862 7.893 7.378 9.33 7.853C39.836 31.922 43.5 21.856 43.5 10.756C35.202 8.108 24.1 7.587 16.554 9.29"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.329 13.492v14.556h7.278M17.736 13.492v14.556m-7.231-7.278a3.64 3.64 0 0 1 0 7.278H4.5V13.492h6.005a3.64 3.64 0 0 1 0 7.278m0 0H4.5"></svg:path>`,
})
export class ArcticonsBilnetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
