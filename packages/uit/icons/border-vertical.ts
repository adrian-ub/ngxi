import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitBorderVerticalIcon],svg[uit-border-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m16-7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 20 3.5m-16 15a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m12-6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-4-14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M8 2.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-4-18a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m8-2a.5.5 0 0 0-.5.5v18a.5.5 0 1 0 1 0V3a.5.5 0 0 0-.5-.5m4 16a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class UitBorderVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
