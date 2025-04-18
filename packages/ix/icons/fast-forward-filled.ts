import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFastForwardFilledIcon],svg[ix-fast-forward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 253.32l-213.333 128v-256zm0 0v128l213.333-128L256 125.32z" clip-rule="evenodd"></svg:path>`,
})
export class IxFastForwardFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
