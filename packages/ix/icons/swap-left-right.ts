import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSwapLeftRightIcon],svg[ix-swap-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m341.334 213.334l128 128l-128 128l-30.294-30.294l76.587-76.373H213.334V320h174.293l-76.587-76.373zM170.667 42.667L200.96 72.96l-76.586 76.374h174.293V192H124.374l76.586 76.374l-30.293 30.293l-128-128z"></svg:path>`,
})
export class IxSwapLeftRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
