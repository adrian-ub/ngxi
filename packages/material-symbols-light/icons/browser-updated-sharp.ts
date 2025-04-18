import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrowserUpdatedSharpIcon],svg[material-symbols-light-browser-updated-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.192 20v-1.538l.77-.77H3V4h9.442v1H4v11.692h16V13h1v4.692h-4.962l.77.77V20zm8.52-5.712L11.423 10l.708-.708l3.08 3.094V4h1v8.387l3.081-3.095L20 10z"></svg:path>`,
})
export class MaterialSymbolsLightBrowserUpdatedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
