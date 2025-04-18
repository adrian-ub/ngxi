import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBedQueenIcon],svg[mdi-bed-queen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3a2 2 0 0 0-2 2v5h1.33L5 19h1l.67-2h10.66l.67 2h1l.67-2H21v-5a2 2 0 0 0-2-2m-2 0H7V7h10Z"></svg:path>`,
})
export class MdiBedQueenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
