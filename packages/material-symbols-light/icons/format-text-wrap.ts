import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatTextWrapIcon],svg[material-symbols-light-format-text-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V5h1v14zm13 0V5h1v14zm-7.13-2.161L8.03 14l2.84-2.814l.688.689L9.933 13.5h2.798q1.056 0 1.778-.722T15.23 11t-.722-1.778T12.73 8.5H7.769v-1h4.962q1.458 0 2.479 1.021Q16.23 9.542 16.23 11t-1.02 2.479t-2.48 1.021H9.934l1.625 1.625z"></svg:path>`,
})
export class MaterialSymbolsLightFormatTextWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
