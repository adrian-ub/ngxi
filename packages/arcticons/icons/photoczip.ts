import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhotoczipIcon],svg[arcticons-photoczip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 33.007V14.993h5.897c3.334 0 6.037 2.709 6.037 6.05s-2.703 6.05-6.037 6.05H10.5M31.533 24H37.5l-5.967 9.007H37.5m-8.097-3.02v.036a2.983 2.983 0 0 1-2.983 2.984h0a2.983 2.983 0 0 1-2.984-2.984v-3.04A2.983 2.983 0 0 1 26.42 24h0a2.983 2.983 0 0 1 2.983 2.984v.037"></svg:path>`,
})
export class ArcticonsPhotoczipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
