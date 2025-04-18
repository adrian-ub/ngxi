import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFlipToBackIcon],svg[ic-sharp-flip-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7H7v2h2zm0 4H7v2h2zm4 4h-2v2h2zm0-12h-2v2h2zM9 3H7v2h2zm12 0h-2v2h2zm0 12h-2v2h2zM9 15H7v2h2zm10-2h2v-2h-2zm0-4h2V7h-2zM5 7H3v14h14v-2H5zm10-2h2V3h-2zm0 12h2v-2h-2z"></svg:path>`,
})
export class IcSharpFlipToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
