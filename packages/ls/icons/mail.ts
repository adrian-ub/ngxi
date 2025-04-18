import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsMailIcon],svg[ls-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 103L384 432L0 103V84h768zm0 464L514 384l254-220zM0 164l254 220L0 567zm384 333l105-92l279 201v4H0v-4l279-201z"></svg:path>`,
})
export class LsMailIcon {
  readonly viewBox = input("0 0 768 614")
  readonly width = input("1.26em")
  readonly height = input("1em")
}
