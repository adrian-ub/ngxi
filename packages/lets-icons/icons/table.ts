import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTableIcon],svg[lets-icons-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15 9h6v9c0 .943 0 1.414-.293 1.707S19.943 20 19 20h-4zM3 9h6v11H5c-.943 0-1.414 0-1.707-.293S3 18.943 3 18zm6 0h6v11H9zM3 6c0-.943 0-1.414.293-1.707S4.057 4 5 4h14c.943 0 1.414 0 1.707.293S21 5.057 21 6v3H3z"></svg:path>`,
})
export class LetsIconsTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
