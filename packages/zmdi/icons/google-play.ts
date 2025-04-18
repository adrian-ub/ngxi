import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiGooglePlayIcon],svg[zmdi-google-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 397V35Q0 14 18 6l210 210L18 426q-18-9-18-29m295-114L65 415l181-181zm71-92q13 10 13 25t-12 25l-49 28l-54-53l54-53zM65 17l230 132l-49 49z"></svg:path>`,
})
export class ZmdiGooglePlayIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
