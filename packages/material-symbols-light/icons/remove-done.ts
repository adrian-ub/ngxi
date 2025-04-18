import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRemoveDoneIcon],svg[material-symbols-light-remove-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.806 21.03l-6.639-6.638l-2.773 2.774l-4.958-4.958l.708-.72l4.25 4.25l2.015-2.053L4.214 3.489l.707-.72l17.593 17.593zM6.744 17.167l-4.957-4.958l.707-.708l4.25 4.25l.693-.692l.707.708zm10.531-4.881l-.708-.708l5.016-5.015l.719.696zm-2.85-2.812l-.708-.707l2.227-2.227l.708.707z"></svg:path>`,
})
export class MaterialSymbolsLightRemoveDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
