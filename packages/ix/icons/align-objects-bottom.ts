import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsBottomIcon],svg[ix-align-objects-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 384v42.667H42.667V384zM234.667 170.667v192H85.333v-192zm192-85.334v277.334H277.333V85.333zM192 213.333h-64V320h64zM384 128h-64v192h64z"></svg:path>`,
})
export class IxAlignObjectsBottomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
