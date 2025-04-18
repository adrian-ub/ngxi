import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFacebookGamingIcon],svg[mdi-facebook-gaming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 14.5v-5H21V21h-5.5v-6.5zM3 3h18v5.5H8.5v7h6V21H3z"></svg:path>`,
})
export class MdiFacebookGamingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
