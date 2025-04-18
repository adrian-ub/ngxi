import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTriangularFlagIcon],svg[openmoji-triangular-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="m67 24l-31 9.5L5 43V5l31 9.5z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m67 24l-31 9.5L5 43V5l31 9.5zM5 5v62"></svg:path>`,
})
export class OpenmojiTriangularFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
