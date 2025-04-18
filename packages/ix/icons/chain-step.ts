import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChainStepIcon],svg[ix-chain-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 320V192h85.334V42.666h42.666V192h85.334v128h-85.334v149.333h-42.666V320zM320 234.667H192v42.666h128z" clip-rule="evenodd"></svg:path>`,
})
export class IxChainStepIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
