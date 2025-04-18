import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSkilletCooktopSharpIcon],svg[material-symbols-skillet-cooktop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15V8h13V6.275l6.675-2.225l.625 1.9L18 7.725V15zm6 6v-3H2v-2h9v5zm4 0v-5h9v2h-7v3z"></svg:path>`,
})
export class MaterialSymbolsSkilletCooktopSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
