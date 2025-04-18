import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsGloveFillIcon],svg[meteocons-glove-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsGloveFill0" x1="201.4" x2="287.6" y1="171.6" y2="320.9" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f87171"></svg:stop><svg:stop offset=".5" stop-color="#f87171"></svg:stop><svg:stop offset="1" stop-color="#dc2626"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsGloveFill1" x1="227.2" x2="284.9" y1="282" y2="382" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f3f7fe"></svg:stop><svg:stop offset=".5" stop-color="#f3f7fe"></svg:stop><svg:stop offset="1" stop-color="#deeafb"></svg:stop></svg:lineargradient></svg:defs><svg:g><svg:path fill="url(#meteoconsGloveFill0)" stroke="#ef4444" stroke-miterlimit="10" stroke-width="4" d="M256 150a64.1 64.1 0 0 0-64.2 64v39.3l-19.4-11.2a16.1 16.1 0 0 0-22 5.9a16 16 0 0 0 6 21.9l34.7 20c.3 0 .5.2.7.3V302h128.5v-88a64.1 64.1 0 0 0-64.2-64Z"></svg:path><svg:rect width="144.5" height="60" x="183.8" y="302" fill="url(#meteoconsGloveFill1)" stroke="#e6effc" stroke-miterlimit="10" stroke-width="3.5" rx="12"></svg:rect><svg:animatetransform id="meteoconsGloveFill2" additive="sum" attributeName="transform" begin="0s; x1.end+1.75s" calcMode="spline" dur="1.25s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" type="rotate" values="0 256 332; 0 256 332; -15 256 332; 15 256 332; -9 256 332; 9 256 332; -6 256 332; 3 256 332; 0 256 332"></svg:animatetransform></svg:g>`,
})
export class MeteoconsGloveFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
