import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsAlignCenterIcon],svg[gridicons-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v-2H4zm13-6H7v2h10zM4 9v2h16V9zm13-4H7v2h10z"></svg:path>`,
})
export class GridiconsAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
