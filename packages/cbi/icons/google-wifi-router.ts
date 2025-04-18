import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiGoogleWifiRouterIcon],svg[cbi-google-wifi-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.775 19.032h12.397v1.291H5.775Zm15.685-7.358H2.494l-.487 5.364A1.592 1.592 0 0 0 3.68 18.75h16.653a1.577 1.577 0 0 0 1.659-1.712zm-.624-6.285A1.86 1.86 0 0 0 19.1 3.677H4.793a1.84 1.84 0 0 0-1.727 1.712l-.488 5.363h18.79z" class="cls-1"></svg:path>`,
})
export class CbiGoogleWifiRouterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
