import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatTextOverflowIcon],svg[material-symbols-light-format-text-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 19.5v-15h1v15zm10.662-4.661l-.689-.714l1.625-1.625H9.019v-1h7.829l-1.625-1.625l.688-.713L18.75 12zM12.096 19.5v-4.23h1v4.23zm0-10.77V4.5h1v4.23z"></svg:path>`,
})
export class MaterialSymbolsLightFormatTextOverflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
