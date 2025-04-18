import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDesktopLightIcon],svg[lets-icons-desktop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 8c0-.957.001-1.624.069-2.128c.066-.49.186-.748.37-.933c.185-.184.444-.304.933-.37C5.376 4.5 6.043 4.5 7 4.5h10c.957 0 1.624.001 2.128.069c.49.066.748.186.933.37c.184.185.305.444.37.933c.068.504.069 1.171.069 2.128v8.5h-17zm.167 8.5c-.645 0-1.167.522-1.167 1.167c0 1.012.82 1.833 1.833 1.833h15.334c1.012 0 1.833-.82 1.833-1.833c0-.645-.522-1.167-1.167-1.167z"></svg:path>`,
})
export class LetsIconsDesktopLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
