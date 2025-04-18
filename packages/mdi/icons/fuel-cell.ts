import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFuelCellIcon],svg[mdi-fuel-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-1h6v1c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-1c1.1 0 2-.9 2-2H11V5H8V3zm10 0v2h-3v2h9c0-1.1-.9-2-2-2h-2V3zM7 7v4h2l-3 6v-4H4zm6 2v2h9V9zm0 4v2h9v-2z"></svg:path>`,
})
export class MdiFuelCellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
