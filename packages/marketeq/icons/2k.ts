import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeq2kIcon],svg[marketeq-2k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m33.708 23.313l10.042 16.27M29.167 10.417v29.166zm0 18.75l14.583-18.75z"></svg:path><svg:path stroke="#306CFE" d="M20.833 39.583H6.25a14.35 14.35 0 0 1 7.23-12.5L17.166 25a7.33 7.33 0 0 0 3.666-6.25v-1.042a7.29 7.29 0 0 0-7.291-7.291v0a7.29 7.29 0 0 0-7.292 7.291v1.042"></svg:path></svg:g>`,
})
export class Marketeq2kIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
