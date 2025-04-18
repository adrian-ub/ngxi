import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconKeyboardTabBelowIcon],svg[codicon-keyboard-tab-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 3.146l5 5v.707l-5 5l-.707-.707L12.439 9H5c-1.103 0-2 .897-2 2v3H2v-3c0-1.654 1.346-3 3-3h7.439L8.293 3.854zM15 3v11h1V3z"></svg:path>`,
})
export class CodiconKeyboardTabBelowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
