import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDeliverIcon],svg[grommet-icons-deliver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M3 18H1V3h13v14m0 1H9m-3 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm11 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6ZM14 8h5l4 5v5h-3"></svg:path>`,
})
export class GrommetIconsDeliverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
