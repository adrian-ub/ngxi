import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconKeyboardTabAboveIcon],svg[codicon-keyboard-tab-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 3.146l5 5v.707l-5 5l-.707-.707L12.439 9H5C3.346 9 2 7.654 2 6V3h1v3c0 1.103.897 2 2 2h7.439L8.293 3.854zM15 3v11h1V3z"></svg:path>`,
})
export class CodiconKeyboardTabAboveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
