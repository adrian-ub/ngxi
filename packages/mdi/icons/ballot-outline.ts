import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBallotOutlineIcon],svg[mdi-ballot-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.5h5v2h-5zm0 7h5v2h-5zM19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 16V5H5v14zM11 6v5H6V6zm-1 4V7H7v3zm1 3v5H6v-5zm-1 4v-3H7v3z"></svg:path>`,
})
export class MdiBallotOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
