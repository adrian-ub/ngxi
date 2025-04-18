import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilEnvelopeAltIcon],svg[uil-envelope-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M5 6h14a1 1 0 0 1 1 1l-8 4.88L4 7a1 1 0 0 1 1-1m15 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.28l7.48 4.57a1 1 0 0 0 1 0L20 9.28Z"></svg:path>`,
})
export class UilEnvelopeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
