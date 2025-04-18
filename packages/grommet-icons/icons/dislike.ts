import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDislikeIcon],svg[grommet-icons-dislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M23 1H4Q1 1 1 4v10h7v6q0 3 3 3h2s.016-6 .016-7.326S14 13 16 13h7zm-5 0v12"></svg:path>`,
})
export class GrommetIconsDislikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
