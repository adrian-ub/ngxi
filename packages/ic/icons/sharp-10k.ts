import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp10kIcon],svg[ic-sharp-10k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10.5h1.5v3H10zM21 3H3v18h18zM7.5 15H6v-4.5H4.5V9h3zM13 9v6H8.5V9zm6 6h-1.75l-1.75-2.25V15H14V9h1.5v2.25L17.25 9H19l-2.25 3z"></svg:path>`,
})
export class IcSharp10kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
