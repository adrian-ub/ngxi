import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPrerenderIconIcon],svg[logos-prerender-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F0DA50" d="M64 0v64h32c17.673 0 32-14.327 32-32V0z"></svg:path><svg:path fill="#4BC69A" d="M32 0C14.327 0 0 14.327 0 32v128c0 17.673 14.327 32 32 32h32V0z"></svg:path><svg:path fill="#F0DA50" d="M160 128c-17.673 0-32 14.327-32 32v32h64v-64z"></svg:path><svg:path fill="#5D7B8C" d="M224 0h-32v192h32c17.673 0 32-14.327 32-32V32c0-17.673-14.327-32-32-32"></svg:path>`,
})
export class LogosPrerenderIconIcon {
  readonly viewBox = input("0 0 256 192")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
