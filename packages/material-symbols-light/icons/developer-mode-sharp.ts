import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeveloperModeSharpIcon],svg[material-symbols-light-developer-mode-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.6 15.87L4.73 12L8.6 8.13l.708.72L6.158 12l3.15 3.15zM6 17h1v1.5h10V17h1v5H6zM7 7H6V2h12v5h-1V5.5H7zm8.4 8.87l-.708-.72l3.15-3.15l-3.15-3.15l.708-.72L19.27 12z"></svg:path>`,
})
export class MaterialSymbolsLightDeveloperModeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
