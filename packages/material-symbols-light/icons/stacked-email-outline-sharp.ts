import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStackedEmailOutlineSharpIcon],svg[material-symbols-light-stacked-email-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16.77v-13h17v13zm8.5-5.283L6 5.943v9.825h15V5.944zm0-1.176L21 4.77H6zM2 19.77V8.654h1v10.115h15.385v1zm19-15H6z"></svg:path>`,
})
export class MaterialSymbolsLightStackedEmailOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
