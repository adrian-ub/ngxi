import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRiotIcon],svg[arcticons-riot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.32 29.35A12.4 12.4 0 0 0 36 27.7a14.2 14.2 0 0 0 3.55-9.27A13.93 13.93 0 0 0 25.62 4.5H14m-5.55 5.57v27.86a5.57 5.57 0 1 0 11.14 0V26"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.2 20.47a5.57 5.57 0 0 0-4.56 8.77L29 41.13a5.57 5.57 0 0 0 9.12-6.38l-8.36-11.91a5.55 5.55 0 0 0-4.56-2.38Z"></svg:path><svg:circle cx="14.02" cy="10.07" r="5.57" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsRiotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
