import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBedSingleOutlineIcon],svg[mdi-bed-single-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10V7a2 2 0 0 0-2-2H9c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L7 19h1l.67-2h6.66l.67 2h1l.67-2H19v-5a2 2 0 0 0-2-2M9 7h6v3H9m8 5H7v-3h10Z"></svg:path>`,
})
export class MdiBedSingleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
