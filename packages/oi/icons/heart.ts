import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiHeartIcon],svg[oi-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1c-.55 0-1.04.23-1.41.59C.23 1.95 0 2.44 0 3c0 .55.23 1.04.59 1.41L4 7.82l3.41-3.41C7.77 4.05 8 3.56 8 3c0-.55-.23-1.04-.59-1.41C7.05 1.23 6.56 1 6 1c-.55 0-1.04.23-1.41.59C4.23 1.95 4 2.44 4 3c0-.55-.23-1.04-.59-1.41C3.05 1.23 2.56 1 2 1"></svg:path>`,
})
export class OiHeartIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
