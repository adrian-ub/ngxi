import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlayIcon],svg[ix-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 106.667L426.667 256L128 405.334zm42.667 64v170.667l170.666-85.324z"></svg:path>`,
})
export class IxPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
