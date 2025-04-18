import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlexNoWrapIcon],svg[material-symbols-light-flex-no-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16.289V7.711h4.77v8.577zm7.616 0V7.711h4.769v8.577zm7.615 0V7.711H22v8.577zM3 15.289h2.77V8.71H3zm15.423 0H21V8.71h-2.577z"></svg:path>`,
})
export class MaterialSymbolsLightFlexNoWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
