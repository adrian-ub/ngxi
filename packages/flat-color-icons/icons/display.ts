import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDisplayIcon],svg[flat-color-icons-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#80DEEA" d="M40 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="#2962FF" d="M36 17h-5l-2-2l2-2h5l2 2zm0 18h-5l-2-2l2-2h5l2 2zm1-5V18l2-2l2 2v12l-2 2zm-11 0V18l2-2l2 2v12l-2 2zm-9-13h-5l-2-2l2-2h5l2 2zm0 18h-5l-2-2l2-2h5l2 2zm1-5V18l2-2l2 2v12l-2 2zM7 30V18l2-2l2 2v12l-2 2z"></svg:path>`,
})
export class FlatColorIconsDisplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
