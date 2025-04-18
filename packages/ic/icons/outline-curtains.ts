import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineCurtainsIcon],svg[ic-outline-curtains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h20v-2zm-2-8.14c-2.05-.58-3.64-2.93-3.94-5.86H18zM15.81 12c-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7M9.94 5c-.3 2.93-1.89 5.27-3.94 5.86V5zM6 13.14c2.05.58 3.64 2.93 3.94 5.86H6zM14.06 19c.3-2.93 1.89-5.27 3.94-5.86V19z"></svg:path>`,
})
export class IcOutlineCurtainsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
