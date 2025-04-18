import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBankIcon],svg[fa-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m960 0l960 384v128h-128q0 26-20.5 45t-48.5 19H197q-28 0-48.5-19T128 512H0V384zM256 640h256v768h128V640h256v768h128V640h256v768h128V640h256v768h59q28 0 48.5 19t20.5 45v64H128v-64q0-26 20.5-45t48.5-19h59zm1595 960q28 0 48.5 19t20.5 45v128H0v-128q0-26 20.5-45t48.5-19z"></svg:path>`,
})
export class FaBankIcon {
  readonly viewBox = input("0 0 1920 1792")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
