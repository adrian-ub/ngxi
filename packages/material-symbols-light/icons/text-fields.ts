import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextFieldsIcon],svg[material-symbols-light-text-fields-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.885 19.116v-13h-5V4.885h11.23v1.23h-5v13zm9 0v-8h-3V9.885h7.23v1.23h-3v8z"></svg:path>`,
})
export class MaterialSymbolsLightTextFieldsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
