import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLastfmLogoFillIcon],svg[ph-lastfm-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 144h-11.39a40.09 40.09 0 0 1-36.42-23.45l-23-50.48A24 24 0 0 0 91.39 96H80a24 24 0 0 0-24 24v24a24 24 0 0 0 24 24h8a23.92 23.92 0 0 0 18.74-9a8 8 0 1 1 12.48 10A39.83 39.83 0 0 1 88 184h-8a40 40 0 0 1-40-40v-24a40 40 0 0 1 40-40h11.39a40.09 40.09 0 0 1 36.42 23.45l22.95 50.48A24 24 0 0 0 172.61 168H184a16 16 0 0 0 0-32h-8a28 28 0 0 1 0-56h12a20 20 0 0 1 20 20a8 8 0 0 1-16 0a4 4 0 0 0-4-4h-12a12 12 0 0 0 0 24h8a32 32 0 0 1 0 64"></svg:path>`,
})
export class PhLastfmLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
