import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsActionIcon],svg[grommet-icons-action-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m1 23l3-3zM20 4l3-3zM9 11l3-3zm4 4l3-3zM10 5l9 9l1-1c2-2 4.053-5 0-9s-7-2-9 0zm-6 6l1-1l9 9l-1 1c-2 2-5 4.087-9 0s-2-7 0-9Z"></svg:path>`,
})
export class GrommetIconsActionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
