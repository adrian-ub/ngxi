import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlashlightOnRoundedIcon],svg[material-symbols-light-flashlight-on-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5.5v-.885q0-.666.475-1.14T8.615 3h6.77q.666 0 1.14.475T17 4.615V5.5zm4.998 9.5q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293M9 19.385v-8.693L7.267 8.096q-.136-.211-.202-.43Q7 7.446 7 7.208V6.5h10v.708q0 .238-.065.457q-.066.22-.202.431L15 10.692v8.693q0 .666-.475 1.14t-1.14.475h-2.77q-.666 0-1.14-.475T9 19.386"></svg:path>`,
})
export class MaterialSymbolsLightFlashlightOnRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
