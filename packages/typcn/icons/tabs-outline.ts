import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnTabsOutlineIcon],svg[typcn-tabs-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4H8a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M5 19v-9h8.5c.275 0 .5.225.5.5V19zm13-3h-3v-5.5c0-.827-.673-1.5-1.5-1.5H8V6h10z"></svg:path>`,
})
export class TypcnTabsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
