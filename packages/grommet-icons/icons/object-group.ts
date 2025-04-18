import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsObjectGroupIcon],svg[grommet-icons-object-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 1h3v3H1zm19 0h3v3h-3zM4 2h16M4 22h16M1 20h3v3H1zm19 0h3v3h-3zM2 4v16M22 4v16M7 7h7v6H7zm10 3v7h-7v-2"></svg:path>`,
})
export class GrommetIconsObjectGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
