import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpForwardToInboxIcon],svg[ic-sharp-forward-to-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h11v-2H4V8l8 5l8-5v5h2zm-10 7L4 6h16zm7 4l4 4l-4 4v-3h-4v-2h4z"></svg:path>`,
})
export class IcSharpForwardToInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
