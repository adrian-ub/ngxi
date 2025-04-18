import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsTopIcon],svg[ix-align-objects-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 128V85.333H42.667V128zM234.667 341.333v-192H85.333v192zm192 85.334V149.333H277.333v277.334zM192 298.667h-64V192h64zM384 384h-64V192h64z"></svg:path>`,
})
export class IxAlignObjectsTopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
