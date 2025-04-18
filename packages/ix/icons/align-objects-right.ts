import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsRightIcon],svg[ix-align-objects-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 469.333h42.667V42.667H384zM170.667 234.667h192V85.333h-192zm-85.334 192h277.334V277.333H85.333zm128-234.667v-64H320v64zM128 384v-64h192v64z"></svg:path>`,
})
export class IxAlignObjectsRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
