import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStackedEmailSharpIcon],svg[material-symbols-light-stacked-email-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16.77v-13h17v13zm-3 3V8.653h1v10.115h15.385v1zm11.5-8.283L21 5.943V4.77l-7.5 5.543L6 4.769v1.175z"></svg:path>`,
})
export class MaterialSymbolsLightStackedEmailSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
