import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psYoutubeAltIcon],svg[ps-youtube-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M462 102q0-29-20-49t-48-20H70q-28 0-48 20T2 102v185q0 29 20 49t48 20h324q28 0 48-20t20-49zM186 273V99l132 87z"></svg:path>`,
})
export class PsYoutubeAltIcon {
  readonly viewBox = input("0 0 464 448")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
