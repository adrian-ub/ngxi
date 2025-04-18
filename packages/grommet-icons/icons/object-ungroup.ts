import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsObjectUngroupIcon],svg[grommet-icons-object-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 1h3v3H1zm12 0h3v3h-3zM4 2h9m2 7h5M4 15h9M1 13h3v3H1zm12 0h3v3h-3zM2 4v9m13-9v9m5-5h3v3h-3zm-9 14h9M8 20h3v3H8zm12 0h3v3h-3zM9 16v4m13-9v9"></svg:path>`,
})
export class GrommetIconsObjectUngroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
