import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAbcSharpIcon],svg[material-symbols-abc-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15V9h5v2h-1.5v-.5h-2v3h2V13H21v2zm-6.5 0V9h4.25l.75.75v1.5l-.75.75l.75.75v1.5l-.75.75zm1.5-3.75h2v-.75h-2zm0 2.25h2v-.75h-2zM3 15V9h5v6H6.5v-1.5h-2V15zm1.5-3h2v-1.5h-2z"></svg:path>`,
})
export class MaterialSymbolsAbcSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
