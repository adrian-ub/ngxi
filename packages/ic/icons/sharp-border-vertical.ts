import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderVerticalIcon],svg[ic-sharp-border-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h2V7H3zm0-4h2V3H3zm4 16h2v-2H7zm0-8h2v-2H7zm-4 0h2v-2H3zm0 8h2v-2H3zm0-4h2v-2H3zM7 5h2V3H7zm12 12h2v-2h-2zm-8 4h2V3h-2zm8 0h2v-2h-2zm0-8h2v-2h-2zm0-10v2h2V3zm0 6h2V7h-2zm-4-4h2V3h-2zm0 16h2v-2h-2zm0-8h2v-2h-2z"></svg:path>`,
})
export class IcSharpBorderVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
