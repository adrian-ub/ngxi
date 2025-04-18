import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongUpCIcon],svg[gg-arrow-long-up-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.758 5.23l4.274-4.21l4.21 4.275l-1.424 1.403l-1.804-1.83l-.071 12.288a3.001 3.001 0 0 1-1.029 5.824a3 3 0 0 1-.971-5.835l.071-12.315l-1.853 1.826zm4.175 13.75a1 1 0 1 0-.01 2a1 1 0 0 0 .01-2" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongUpCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
