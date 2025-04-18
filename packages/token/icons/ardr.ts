import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenArdrIcon],svg[token-ardr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.892 14.403l1.593 2.064l-4.635 3.127zM12 4.406L14.457 8.4L7.905 19.594H3zm0 8.79l3.276-2.393L21 19.593h-4.086z"></svg:path>`,
})
export class TokenArdrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
