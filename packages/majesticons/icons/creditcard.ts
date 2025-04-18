import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCreditcardIcon],svg[majesticons-creditcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1H2zm0 3v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7zm5 2a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCreditcardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
