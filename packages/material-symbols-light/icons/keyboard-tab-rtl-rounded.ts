import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardTabRtlRoundedIcon],svg[material-symbols-light-keyboard-tab-rtl-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 17.5q-.214 0-.357-.144T3 17V7q0-.213.144-.356t.357-.144t.356.144T4 7v10q0 .213-.144.356t-.357.144m4.788-5l3.74 3.74q.146.147.156.357t-.156.357q-.146.14-.347.14t-.341-.14L6.95 12.565q-.13-.13-.184-.27q-.052-.138-.052-.297t.052-.296t.184-.267l4.37-4.389q.133-.14.34-.14t.344.137q.15.15.156.35t-.133.342L8.306 11.5H20.5q.213 0 .356.144t.144.357t-.144.356t-.356.143z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardTabRtlRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
