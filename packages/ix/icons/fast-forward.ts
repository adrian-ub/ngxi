import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFastForwardIcon],svg[ix-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 256L42.667 128v256zm0 0V128l213.333 128L256 384zM85.333 203.328L173.1 256l-87.766 52.651zm213.334 0L386.432 256l-87.765 52.651z" clip-rule="evenodd"></svg:path>`,
})
export class IxFastForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
