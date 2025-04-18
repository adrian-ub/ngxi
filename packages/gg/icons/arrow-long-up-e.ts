import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongUpEIcon],svg[gg-arrow-long-up-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.032 1.013l4.21 4.275l-1.424 1.403l-1.804-1.83l-.07 12.116l1.999.01l-.029 6l-6-.029l.029-6l2 .01l.071-12.145L9.161 6.65L7.758 5.224zm-1.108 19.955l2 .01l.01-2l-2-.01z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongUpEIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
