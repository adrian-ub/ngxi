import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilListUiAltIcon],svg[uil-list-ui-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 6a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4 2h14a1 1 0 0 0 0-2h-14a1 1 0 0 0 0 2m0 3a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4 5a1 1 0 1 0 1 1a1 1 0 0 0-1-1m10-5h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0 5h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilListUiAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
