import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsFogNightFillIcon],svg[meteocons-fog-night-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsFogNightFill0" x1="96" x2="168" y1="-2.4" y2="122.3" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsFogNightFill1" x2="168" y1="-50.4" y2="74.3" href="#meteoconsFogNightFill0"></svg:lineargradient><svg:lineargradient id="meteoconsFogNightFill2" x1="54.3" x2="187.2" y1="29" y2="259.1" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#86c3db"></svg:stop><svg:stop offset=".5" stop-color="#86c3db"></svg:stop><svg:stop offset="1" stop-color="#5eafcf"></svg:stop></svg:lineargradient><svg:symbol id="meteoconsFogNightFill3" viewBox="0 0 270 270"><svg:path fill="url(#meteoconsFogNightFill2)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M252.3 168.6A133.4 133.4 0 0 1 118 36.2A130.5 130.5 0 0 1 122.5 3A133 133 0 0 0 3 134.6C3 207.7 63 267 137.2 267c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsFogNightFill4" viewBox="0 0 264 72"><svg:path fill="none" stroke="url(#meteoconsFogNightFill0)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M12 60h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="url(#meteoconsFogNightFill1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M12 12h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsFogNightFill5"><svg:path fill="none" d="M0 0h512v306H0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsFogNightFill5)"><svg:use width="270" height="270" href="#meteoconsFogNightFill3" transform="translate(121 121)"></svg:use></svg:g><svg:use width="264" height="72" href="#meteoconsFogNightFill4" transform="translate(124 336)"></svg:use>`,
})
export class MeteoconsFogNightFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
