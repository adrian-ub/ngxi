import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTpadIcon],svg[token-branded-tpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTpad0)" d="m11.875 21l.01-18L4.5 6.43l2.015 1.185l3.985-1.82v14.4c.225.14.455.27.685.4zm1.625-.8l-1.38.8V3l7.38 3.43l-1.99 1.205L13.5 5.75zm-9-13.04c.32.19.66.38 1 .57s.68.38 1 .57v7.19l3.5 2.08v2.25l-5.5-3.205zm14 .57c.34-.19.68-.38 1-.57v9.455c-.915.535-1.835 1.08-2.75 1.63L14 19.87v-2.3c.6-.35 1.175-.695 1.75-1.04a81 81 0 0 1 1.75-1.04V8.3c.32-.19.66-.38 1-.57"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTpad0" x1="11.415" x2="22.82" y1="18.81" y2="14.225" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FC01C2"></svg:stop><svg:stop offset="1" stop-color="#6D138E"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
