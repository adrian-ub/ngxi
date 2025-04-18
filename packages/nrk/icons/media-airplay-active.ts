import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaAirplayActiveIcon],svg[nrk-media-airplay-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3h22v15h-5.2l-1.3-2H21V5H3v11h4.5l-1.3 2H1zm18 11h-3.8L12 9l-3.2 5H5V7h14zm-7-1l-5 8h10z"></svg:path>`,
})
export class NrkMediaAirplayActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
