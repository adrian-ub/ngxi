import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUppercaseIcon],svg[material-symbols-uppercase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 18v-6.2l-1.6 1.6l-1.4-1.4l4-4l4 4l-1.4 1.4l-1.6-1.6V18zM3 18L7.125 7H9.1l4.125 11h-1.9l-.975-2.825H5.9L4.9 18zm3.475-4.425H9.75l-1.625-4.55h-.1z"></svg:path>`,
})
export class MaterialSymbolsUppercaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
