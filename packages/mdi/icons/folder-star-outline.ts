import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderStarOutlineIcon],svg[mdi-folder-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.78 12.05l3.03-.26L15 9l1.19 2.79l3.03.26l-2.3 1.99l.69 2.96L15 15.47L12.39 17l.69-2.96zM22 8v10c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6l2 2h8a2 2 0 0 1 2 2m-2 0H4v10h16z"></svg:path>`,
})
export class MdiFolderStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
