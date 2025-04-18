import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSplitVerticallyIcon],svg[ix-split-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-341.333 42.667v298.666h128V106.667zm170.666 298.666h128V106.667h-128z"></svg:path>`,
})
export class IxSplitVerticallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
