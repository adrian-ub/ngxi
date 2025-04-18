import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsLeftIcon],svg[ix-align-objects-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 469.333H85.333V42.667H128zm213.333-234.666h-192V85.333h192zm85.334 192H149.333V277.333h277.334zM298.667 192v-64H192v64zM384 384v-64H192v64z"></svg:path>`,
})
export class IxAlignObjectsLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
