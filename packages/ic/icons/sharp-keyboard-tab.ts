import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpKeyboardTabIcon],svg[ic-sharp-keyboard-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6l-6-6zM20 6v12h2V6z"></svg:path>`,
})
export class IcSharpKeyboardTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
