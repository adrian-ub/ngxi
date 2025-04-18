import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNrkRadioIcon],svg[arcticons-nrk-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 11.903h4.679v12.898H5.5zm13.467 0h4.679v12.898h-4.679zm9.497 0h4.679v12.898h-4.679z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 11.903h-4.679l-4.679 6.449l4.679 6.449H42.5l-4.679-6.449zM18.967 24.802H14.29l-4.11-12.899h2.06c1.56 0 2.94 1.01 3.414 2.495z"></svg:path><svg:circle cx="25.986" cy="14.243" r="2.339" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 36.097v-8h2.619c1.48 0 2.681 1.203 2.681 2.687S9.6 33.47 8.119 33.47H5.5m2.619 0l2.619 2.625"></svg:path><svg:circle cx="24.668" cy="28.347" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.668 30.797v5.3m-8.214-2a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2m0 3.3v-5.3m6.019 2a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v1.3a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2m0 2v-8m4.183 4.7a2 2 0 1 1 4 0v1.3a2 2 0 1 1-4 0z"></svg:path>`,
})
export class ArcticonsNrkRadioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
