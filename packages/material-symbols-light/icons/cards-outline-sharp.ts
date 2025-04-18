import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCardsOutlineSharpIcon],svg[material-symbols-light-cards-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.77 11.116V6.769h4.346v4.347zm0 6.115v-4.347h4.346v4.347zm6.115-6.116V6.77h4.346v4.347zm0 6.116v-4.347h4.346v4.347zm-5.116-7.116h2.346V7.77H7.77zm6.116 0h2.346V7.77h-2.347zm-6.116 6.116h2.346v-2.347H7.77zm6.116 0h2.346v-2.347h-2.347zM4 20V4h16v16zm1-1h14V5H5z"></svg:path>`,
})
export class MaterialSymbolsLightCardsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
