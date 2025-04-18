import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsGooglePlayIcon],svg[grommet-icons-google-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.128 12.003L1.09 22.011a2.73 2.73 0 0 0 3.999 1.62l11.29-6.377l-5.251-5.25Z"></svg:path><svg:path d="m21.338 9.67l-4.899-2.806l-5.311 5.14l5.251 5.25l4.944-2.865a2.663 2.663 0 0 0 0-4.719zM1.09 1.995q-.09.339-.09.69V21.32q0 .351.09.69l10.038-10.007zm10.038 10.008l5.311-5.139L5.126.383A2.8 2.8 0 0 0 3.723 0A2.73 2.73 0 0 0 1.09 1.988z"></svg:path></svg:g>`,
})
export class GrommetIconsGooglePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
