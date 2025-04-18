import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSackIcon],svg[mdi-sack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9c4 2 5 9 5 9s1 4-5 4H8c-6 0-5-4-5-4s1-7 5-9m6-5l-2-2l-2 2l-4-2l2 5h8l2-5z"></svg:path>`,
})
export class MdiSackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
