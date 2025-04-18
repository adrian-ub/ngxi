import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp1kIcon],svg[ic-sharp-1k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM10 15H8.5v-4.5H7V9h3zm7 0h-1.75l-1.75-2.25V15H12V9h1.5v2.25L15.25 9H17l-2.25 3z"></svg:path>`,
})
export class IcSharp1kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
