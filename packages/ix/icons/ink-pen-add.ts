import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixInkPenAddIcon],svg[ix-ink-pen-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.333 298.668v64h64v42.667h-64v64h-42.666v-64h-64v-42.667h64v-64zm-64-256l85.334 85.333L384 170.668l-53.333 160l-288 96l96-288l160-53.333zm-19.619 79.959l-149.319 49.769l-54.742 164.181l96.402-96.388a21 21 0 0 1-.578-3.033l-.144-2.488c0-11.782 9.552-21.333 21.334-21.333S256 222.886 256 234.668s-9.551 21.333-21.333 21.333c-1.909 0-3.76-.25-5.521-.721l-96.367 96.337l164.138-54.698l49.791-149.299z"></svg:path>`,
})
export class IxInkPenAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
