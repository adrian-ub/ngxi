import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHome3Icon],svg[mage-home-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.643 7.116L13.162 3.09a2.23 2.23 0 0 0-2.365 0L4.316 7.116a2.23 2.23 0 0 0-1.015 2.231l1.673 10.04a2.23 2.23 0 0 0 2.231 1.863H16.8a2.23 2.23 0 0 0 2.23-1.863l1.674-10.04a2.23 2.23 0 0 0-1.06-2.23"></svg:path><svg:path d="M13.653 10.14h-3.347c-.924 0-1.673.748-1.673 1.672v3.347c0 .924.75 1.673 1.673 1.673h3.347c.924 0 1.673-.749 1.673-1.673v-3.347c0-.924-.749-1.673-1.673-1.673"></svg:path></svg:g>`,
})
export class MageHome3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
