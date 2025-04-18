import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardVariantIcon],svg[mdi-keyboard-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h12v2H6zm0-3v2H2v-2zm1 2v-2h3v2zm4 0v-2h2v2zm3 0v-2h3v2zm4 0v-2h4v2zM2 10h3v2H2zm17 2v-2h3v2zm-1 0h-2v-2h2zM8 12H6v-2h2zm4 0H9v-2h3zm3 0h-2v-2h2zM2 9V7h2v2zm3 0V7h2v2zm3 0V7h2v2zm3 0V7h2v2zm3 0V7h2v2zm3 0V7h5v2z"></svg:path>`,
})
export class MdiKeyboardVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
