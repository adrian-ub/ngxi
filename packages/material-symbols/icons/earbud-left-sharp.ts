import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbudLeftSharpIcon],svg[material-symbols-earbud-left-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22V12H3V4h9v18zm8-8V2h1q2.5 0 4.25 1.75T21 8t-1.75 4.25T15 14z"></svg:path>`,
})
export class MaterialSymbolsEarbudLeftSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
