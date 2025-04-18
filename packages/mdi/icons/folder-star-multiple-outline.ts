import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderStarMultipleOutlineIcon],svg[mdi-folder-star-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v14h18v2H2c-1.105 0-2-.89-2-2V6zm10.78 4.05l3.03-.26L17 7l1.19 2.79l3.03.26l-2.3 1.99l.69 2.96L17 13.47L14.39 15l.69-2.96zM24 6v10c0 1.11-.89 2-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6l2 2h8a2 2 0 0 1 2 2m-2 0H6v10h16z"></svg:path>`,
})
export class MdiFolderStarMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
