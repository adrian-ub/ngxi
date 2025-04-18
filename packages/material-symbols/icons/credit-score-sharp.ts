import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCreditScoreSharpIcon],svg[material-symbols-credit-score-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.95 22l-4.25-4.25l1.4-1.4l2.85 2.8l5.65-5.65l1.4 1.45zM4 12h16V8H4zm-2 8V4h20v8h-2.725l-4.325 4.325l-2.825-2.825l-4.25 4.25l.225.25v2z"></svg:path>`,
})
export class MaterialSymbolsCreditScoreSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
