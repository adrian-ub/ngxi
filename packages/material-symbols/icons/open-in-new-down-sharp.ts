import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOpenInNewDownSharpIcon],svg[material-symbols-open-in-new-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v9h-2V5H5v14h7v2zm11 0v-2h3.6L8.3 9.7l1.4-1.4l9.3 9.275V14h2v7z"></svg:path>`,
})
export class MaterialSymbolsOpenInNewDownSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
