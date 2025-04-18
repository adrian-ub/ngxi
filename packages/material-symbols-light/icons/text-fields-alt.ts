import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextFieldsAltIcon],svg[material-symbols-light-text-fields-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20.23V19h20v1.23zM19 17V4h.885v13zM4.73 17l5.29-13h.96l5.29 13h-1.21l-1.442-3.62H7.335L5.862 17zm2.978-4.6h5.527l-2.743-6.8h-.023z"></svg:path>`,
})
export class MaterialSymbolsLightTextFieldsAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
