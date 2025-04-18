import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCreditcardPlusIcon],svg[majesticons-creditcard-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 15v3m0 3v-3m0 0h-3m3 0h3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5 4a3 3 0 0 0-3 3v1h20V7a3 3 0 0 0-3-3zM2 17v-7h20v3.528A6 6 0 0 0 12.341 20H5a3 3 0 0 1-3-3m4-4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsCreditcardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
