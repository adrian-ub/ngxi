import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDynamicFeedIcon],svg[ic-sharp-dynamic-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8H6v9h11v-2H8z"></svg:path><svg:path fill="currentColor" d="M22 3H10v10h12zm-2 8h-8V7h8zM4 12H2v9h11v-2H4z"></svg:path>`,
})
export class IcSharpDynamicFeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
