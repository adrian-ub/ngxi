import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faExclamationIcon],svg[fa-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 1120v224q0 26-19 45t-45 19H96q-26 0-45-19t-19-45v-224q0-26 19-45t45-19h256q26 0 45 19t19 45M446 64l-28 768q-1 26-20.5 45T352 896H96q-26 0-45.5-19T30 832L2 64Q1 38 19.5 19T64 0h320q26 0 44.5 19T446 64"></svg:path>`,
})
export class FaExclamationIcon {
  readonly viewBox = input("0 0 448 1408")
  readonly width = input("0.32em")
  readonly height = input("1em")
}
