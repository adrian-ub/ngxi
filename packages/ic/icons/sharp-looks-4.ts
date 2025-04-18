import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLooks4Icon],svg[ic-sharp-looks-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.04 3h-18v18h18zm-6 14h-2v-4h-4V7h2v4h2V7h2z"></svg:path>`,
})
export class IcSharpLooks4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
