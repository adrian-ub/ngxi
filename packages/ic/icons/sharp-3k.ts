import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp3kIcon],svg[ic-sharp-3k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM11 9v6H6.5v-1.5h3v-1h-2v-1h2v-1h-3V9zm7 6h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z"></svg:path>`,
})
export class IcSharp3kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
