import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsListBoxIcon],svg[pixelarticons-list-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v18H2zm18 16V5H4v14zM8 7H6v2h2zm2 0h8v2h-8zm-2 4H6v2h2zm2 0h8v2h-8zm-2 4H6v2h2zm2 0h8v2h-8z"></svg:path>`,
})
export class PixelarticonsListBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
