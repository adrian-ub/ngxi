import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindsockFillIcon],svg[meteocons-windsock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsWindsockFill0" x1="90" x2="206" y1="155.6" y2="356.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsWindsockFill1" x1="179.4" x2="226.7" y1="142.4" y2="224.3" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f87171"></svg:stop><svg:stop offset=".5" stop-color="#f87171"></svg:stop><svg:stop offset="1" stop-color="#dc2626"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsWindsockFill2" x1="252.5" x2="291.9" y1="149.2" y2="217.5" href="#meteoconsWindsockFill1"></svg:lineargradient><svg:lineargradient id="meteoconsWindsockFill3" x1="325.6" x2="357.2" y1="156" y2="210.7" href="#meteoconsWindsockFill1"></svg:lineargradient></svg:defs><svg:path fill="none" stroke="url(#meteoconsWindsockFill0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="M148 376V136"></svg:path><svg:path fill="url(#meteoconsWindsockFill1)" stroke="#ef4444" stroke-miterlimit="10" stroke-width="2" d="m191.4 137l28.8 4.3a6.4 6.4 0 0 1 5.4 6.3v73.7a6.4 6.4 0 0 1-5.4 6.3l-28.8 4.2a6.4 6.4 0 0 1-7.3-6.4v-82a6.4 6.4 0 0 1 7.3-6.3Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 99 184; 6 99 184; -6 99 184"></svg:animatetransform></svg:path><svg:path fill="url(#meteoconsWindsockFill2)" stroke="#ef4444" stroke-miterlimit="10" stroke-width="2" d="m260.6 146.1l28.8 4.2a6.4 6.4 0 0 1 5.4 6.3v55.6a6.4 6.4 0 0 1-5.5 6.3l-28.7 4.2a6.4 6.4 0 0 1-7.3-6.3v-64a6.4 6.4 0 0 1 7.3-6.3Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 99 184; 6 99 184; -6 99 184"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="1.5s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 5 0; 0 0"></svg:animatetransform></svg:path><svg:path fill="url(#meteoconsWindsockFill3)" stroke="#ef4444" stroke-miterlimit="10" stroke-width="2" d="m329.8 155.2l28.7 4.2a6.4 6.4 0 0 1 5.5 6.3v37.4a6.4 6.4 0 0 1-5.5 6.3l-28.7 4.2a6.4 6.4 0 0 1-7.3-6.3v-45.8a6.4 6.4 0 0 1 7.3-6.3Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 99 184; 6 99 184; -6 99 184"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="1.5s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 10 0; 0 0"></svg:animatetransform></svg:path>`,
})
export class MeteoconsWindsockFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
