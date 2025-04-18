import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLooksTwoIcon],svg[ic-sharp-looks-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-6 10h-4v2h4v2H9v-6h4V9H9V7h6z"></svg:path>`,
})
export class IcSharpLooksTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
