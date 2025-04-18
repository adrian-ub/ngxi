import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapaneseProhibitedButtonIcon],svg[openmoji-japanese-prohibited-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M25 37h22m-25.5 4.5h29"></svg:path><svg:path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M36.5 43v7.5h-5M29 44s-3 5-7 6m21-6s3 5 7 6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 22v10m-7-7.426h12.5m-12 7.926s6-4 6-8m1.352 0s1.648 5 4.648 6m10-8.5v10m7-7.426H38M50 32.5s-6-4-6-8m-1.352 0S40.645 30.75 37 32"></svg:path><svg:path fill="none" stroke-miterlimit="10" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path></svg:g>`,
})
export class OpenmojiJapaneseProhibitedButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
