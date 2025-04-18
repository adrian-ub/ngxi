import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsClearNightFillIcon],svg[meteocons-clear-night-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsClearNightFill0" x1="54.3" x2="187.2" y1="29" y2="259.1" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#86c3db"></svg:stop><svg:stop offset=".5" stop-color="#86c3db"></svg:stop><svg:stop offset="1" stop-color="#5eafcf"></svg:stop></svg:lineargradient><svg:symbol id="meteoconsClearNightFill1" viewBox="0 0 270 270"><svg:path fill="url(#meteoconsClearNightFill0)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M252.3 168.6A133.4 133.4 0 0 1 118 36.2A130.5 130.5 0 0 1 122.5 3A133 133 0 0 0 3 134.6C3 207.7 63 267 137.2 267c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:use width="270" height="270" href="#meteoconsClearNightFill1" transform="translate(121 121)"></svg:use>`,
})
export class MeteoconsClearNightFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
