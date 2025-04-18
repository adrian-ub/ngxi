import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitListUiAltIcon],svg[uit-list-ui-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4 0h14a.5.5 0 0 0 0-1h-14a.5.5 0 0 0 0 1m14 4h-10a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1m0 5h-6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1m-14-6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class UitListUiAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
