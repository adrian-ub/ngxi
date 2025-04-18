import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbudCaseSharpIcon],svg[material-symbols-earbud-case-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12v5q0 1.65 1.175 2.825T7 21h10q1.65 0 2.825-1.175T21 17v-5h-4v4H7v-4zm6 0v2h6v-2zm-6-2h18V7q0-1.65-1.175-2.825T17 3H7Q5.35 3 4.175 4.175T3 7z"></svg:path>`,
})
export class MaterialSymbolsEarbudCaseSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
