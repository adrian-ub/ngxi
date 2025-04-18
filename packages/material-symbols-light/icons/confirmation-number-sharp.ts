import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightConfirmationNumberSharpIcon],svg[material-symbols-light-confirmation-number-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.308q.214 0 .357-.144t.143-.357t-.144-.356t-.357-.143t-.356.144t-.143.356q0 .213.144.357t.357.143m0-3.808q.213 0 .356-.144t.143-.357t-.144-.356t-.357-.143t-.356.144t-.143.357t.144.356t.357.143m0-3.808q.213 0 .356-.144t.143-.356t-.144-.357t-.357-.143t-.356.144t-.143.357t.144.356t.357.143M3 19v-4.192q.883-.327 1.441-1.088Q5 12.96 5 12t-.559-1.72T3 9.192V5h18v4.192q-.883.327-1.441 1.088Q19 11.04 19 12t.559 1.72T21 14.808V19z"></svg:path>`,
})
export class MaterialSymbolsLightConfirmationNumberSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
