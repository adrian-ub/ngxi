import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCalculatorIcon],svg[ix-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.334 42.667h341.333v426.666H85.334zM128 85.333h256v85.334H128zm64 128h-42.667V256H192zm42.667 0h42.666V256h-42.666zm42.666 85.334h-42.666v42.666h42.666zm42.667 0h42.667v42.666H320zm-128 0h-42.667v42.666H192zM234.667 384h42.666v42.667h-42.666zm128 0H320v42.667h42.667zm-213.334 0H192v42.667h-42.667zm213.334-170.667H320V256h42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxCalculatorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
