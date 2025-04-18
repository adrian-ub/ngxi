import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ResizeDiagonalIcon],svg[icons8-resize-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5v2h9.563L7 23.563V14H5v13h13v-2H8.437L25 8.437V18h2V5z"></svg:path>`,
})
export class Icons8ResizeDiagonalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
