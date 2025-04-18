import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixArrowRightDownIcon],svg[ix-arrow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m298.666 426.666l128-128l-30.293-30.293L320 344.96V106.666H64v42.667h213.333V344.96l-76.373-76.587l-30.294 30.293z"></svg:path>`,
})
export class IxArrowRightDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
