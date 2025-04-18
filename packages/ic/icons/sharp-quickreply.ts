import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpQuickreplyIcon],svg[ic-sharp-quickreply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20l4-4h9v-8h7z"></svg:path><svg:path fill="currentColor" d="M22.5 16h-2.2l1.7-4h-5v6h2v5z"></svg:path>`,
})
export class IcSharpQuickreplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
