import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderInnerIcon],svg[ic-sharp-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h2v-2H3zm4 0h2v-2H7zM5 7H3v2h2zM3 17h2v-2H3zM9 3H7v2h2zM5 3H3v2h2zm12 0h-2v2h2zm2 6h2V7h-2zm0-6v2h2V3zm-4 18h2v-2h-2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8zm6 18h2v-2h-2zm0-4h2v-2h-2z"></svg:path>`,
})
export class IcSharpBorderInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
