import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNestWakeOnPressSharpIcon],svg[material-symbols-light-nest-wake-on-press-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.23 11.962V5H21v6.962zM7.217 20l-4.639-4.663l.835-.84l3.819.753V5.27q0-.53.37-.9T8.5 4t.899.37t.37.9v5.46h1.227l5.025 2.497L14.908 20z"></svg:path>`,
})
export class MaterialSymbolsLightNestWakeOnPressSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
