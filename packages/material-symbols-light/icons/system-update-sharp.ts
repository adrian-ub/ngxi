import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSystemUpdateSharpIcon],svg[material-symbols-light-system-update-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22V2h12v20zm1-3.5h10v-13H7zm5-3.192L8.692 12l.708-.708l2.1 2.089V8.692h1v4.689l2.1-2.089l.708.708z"></svg:path>`,
})
export class MaterialSymbolsLightSystemUpdateSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
