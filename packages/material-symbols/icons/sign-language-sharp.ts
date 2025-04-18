import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignLanguageSharpIcon],svg[material-symbols-sign-language-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 23v-2h5v-1H2v-2h7v-1H1v-2h8v-1H3v-2h7.1L8.55 9.325l1.65-1.65L18 13.5V23zm2.75-12.325L5.575 9.85L6.5 8.575l.425.3l.775 1.8zm1.2-2.825L5.775 6.275l1.15-1.625L9.35 6.4zm12.425 5.575L13.05 7.95L6.775 3.275l1.175-1.65L14.375 6.4l.6-.8l-4.825-3.575l1.15-1.6l5.75 4.225l.4-3.075l2.275-.35l2.775 9.35z"></svg:path>`,
})
export class MaterialSymbolsSignLanguageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
