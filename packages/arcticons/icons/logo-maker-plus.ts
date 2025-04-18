import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLogoMakerPlusIcon],svg[arcticons-logo-maker-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.93 22.66v-1.256a2.665 2.665 0 0 0-2.664-2.665h-.388v3.92h-1.256a2.665 2.665 0 0 0-2.665 2.665v.389h3.92v1.255a2.665 2.665 0 0 0 2.666 2.665h.388v-3.92h1.255a2.665 2.665 0 0 0 2.665-2.665v-.388z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.772 39.36a1.31 1.31 0 0 1-1.312-1.312V16.02c0-3.12-2.53-5.66-5.66-5.66h-.29v22.028c0 .725.587 1.312 1.312 1.312H26.66c3.13 0 5.66 2.54 5.66 5.66z"></svg:path>`,
})
export class ArcticonsLogoMakerPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
