import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsEraserLineIcon],svg[majesticons-eraser-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#majesticonsEraserLine0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.607 6.535l-7.779 7.779a2 2 0 0 0 0 2.828l1.536 1.536a2 2 0 0 0 1.414.585h6.243M11.607 6.535l2.12-2.12a2 2 0 0 1 2.83 0l4.242 4.242a2 2 0 0 1 0 2.828l-2.121 2.122m-7.071-7.072l7.07 7.072m0 0l-5.656 5.656m0 0H20"></svg:path></svg:g><svg:defs><svg:clippath id="majesticonsEraserLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MajesticonsEraserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
