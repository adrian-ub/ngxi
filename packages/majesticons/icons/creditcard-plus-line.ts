import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCreditcardPlusLineIcon],svg[majesticons-creditcard-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9v8a2 2 0 0 0 2 2h6M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 9h18m0 0v3M7 13h5m6 2v3m0 3v-3m0 0h-3m3 0h3"></svg:path>`,
})
export class MajesticonsCreditcardPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
