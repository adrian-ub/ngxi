import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAppShortcutSharpIcon],svg[material-symbols-light-app-shortcut-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.38 12.5h-6.995v3.616h-1V11.5h7.996l-2.089-2.1l.708-.708L20.308 12L17 15.308l-.708-.708zM6 22V2h12v4.923h-1V5.5H7v13h10v-1.423h1V22z"></svg:path>`,
})
export class MaterialSymbolsLightAppShortcutSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
