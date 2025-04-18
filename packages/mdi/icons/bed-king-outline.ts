import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBedKingOutlineIcon],svg[mdi-bed-king-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3a2 2 0 0 0-2 2v5h1.33L4 19h1l.67-2h12.66l.67 2h1l.67-2H22v-5a2 2 0 0 0-2-2m-7-3h5v3h-5M6 7h5v3H6m14 5H4v-3h16Z"></svg:path>`,
})
export class MdiBedKingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
