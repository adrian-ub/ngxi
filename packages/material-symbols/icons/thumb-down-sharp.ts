import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsThumbDownSharpIcon],svg[material-symbols-thumb-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 16v-4.4L4.65 3H16v13l-7 7l-1.85-1.85L8.45 16zm17 0V3h4v13z"></svg:path>`,
})
export class MaterialSymbolsThumbDownSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
