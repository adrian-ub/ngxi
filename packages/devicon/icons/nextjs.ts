import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconNextjsIcon],svg[devicon-nextjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="64" cy="64" r="64"></svg:circle><svg:path fill="url(#deviconNextjs0)" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"></svg:path><svg:path fill="url(#deviconNextjs1)" d="M81.778 38.4h8.533v51.2h-8.533z"></svg:path><svg:defs><svg:lineargradient id="deviconNextjs0" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconNextjs1" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs>`,
})
export class DeviconNextjsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
