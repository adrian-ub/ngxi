import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsRainbowClearIcon],svg[meteocons-rainbow-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsRainbowClear0"><svg:path fill="none" d="M238 59.1H36V268h52.4l67.4-82.6l82.2-19.2V59.1z"></svg:path></svg:clippath><svg:clippath id="meteoconsRainbowClear1"><svg:path fill="none" d="M368.4 0v225.6H352a45.2 45.2 0 0 0-38.5 21.5a30.2 30.2 0 0 0-45.6 25.9a29.4 29.4 0 0 0 .5 4.9a32.3 32.3 0 0 0-26.4 31.8v9.8H0V0Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-12 0; 12 0; -12 0"></svg:animatetransform></svg:path></svg:clippath><svg:symbol id="meteoconsRainbowClear2" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsRainbowClear3" viewBox="0 0 197.5 128.5"><svg:path fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="12" d="m161.3 62l-1.4.1a45.8 45.8 0 0 0 1.4-10.8a45.3 45.3 0 0 0-83.8-23.8a30.1 30.1 0 0 0-45.6 26a30.5 30.5 0 0 0 .4 4.9a32.3 32.3 0 0 0 6 64h123a30.2 30.2 0 0 0 0-60.3Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-12 0; 12 0; -12 0"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsRainbowClear0)"><svg:use width="193" height="193" href="#meteoconsRainbowClear2" transform="translate(49.5 79.5)"></svg:use></svg:g><svg:g fill="none" stroke-miterlimit="10" stroke-width="24" clip-path="url(#meteoconsRainbowClear1)"><svg:path stroke="#f87171" d="M82 310c0-79.5 66.3-144 148-144s148 64.5 148 144"></svg:path><svg:path stroke="#fbbf24" d="M106 310c0-66.3 55.5-120 124-120s124 53.7 124 120"></svg:path><svg:path stroke="#51cf66" d="M130 310c0-53 44.8-96 100-96s100 43 100 96"></svg:path></svg:g><svg:use width="197.5" height="128.5" href="#meteoconsRainbowClear3" transform="translate(235.94 219.59)"></svg:use>`,
})
export class MeteoconsRainbowClearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
