import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTableViewIcon],svg[ri-table-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm5 2v3H4V5zm-4 9v-4h4v4zm0 2h4v3H4zm6 0h10v3H10zm10-2H10v-4h10zm0-9v3H10V5z"></svg:path>`,
})
export class RiTableViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
