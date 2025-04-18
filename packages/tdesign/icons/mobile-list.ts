import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileListIcon],svg[tdesign-mobile-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v5h-2V3H6v18h12v-5h2v7H4zm9 7h11v2H13zm0 4h8v2h-8zm-2 5h2.004v2.004H11z"></svg:path>`,
})
export class TdesignMobileListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
