import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUniversalAccessIcon],svg[hugeicons-universal-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.006 7.313c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25m0-3c-.41 0-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75s-.34-.75-.75-.75m0 5.5h-.01q.378-.001.75-.026v4.025h-1.5V9.788q.373.025.75.025h-.01zm-2.26-.229c-1.57-.323-3.015-.983-4.21-1.932a.75.75 0 0 1-.12-1.05c.26-.32.73-.37 1.05-.12c1.48 1.18 3.44 1.84 5.53 1.84s4.05-.65 5.53-1.84a.74.74 0 0 1 1.05.12c.26.32.21.8-.12 1.05c-1.187.956-2.636 1.614-4.21 1.935v4.915l.99 5.94c.07.41-.21.8-.62.86q-.03 0-.06.006l-.056.005a.75.75 0 0 1-.734-.63l-.9-5.37h-1.73l-.9 5.37a.76.76 0 0 1-.86.62a.755.755 0 0 1-.62-.86l.99-5.94zM14.5 21.313h-.004h.01z" color="currentColor"></svg:path>`,
})
export class HugeiconsUniversalAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
