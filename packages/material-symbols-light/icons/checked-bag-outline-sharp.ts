import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCheckedBagOutlineSharpIcon],svg[material-symbols-light-checked-bag-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.385 19.385v-1h17.23v1zm1.615-3V7h4.616q0-.98.701-1.683q.702-.702 1.683-.702t1.683.702T14.385 7H19v9.385zm11.692-1H18V8h-1.308zM10.5 7h3q0-.65-.425-1.075T12 5.5t-1.075.425T10.5 7m-3.192 8.385V8H6v7.385zM8.192 8v7.385h7.616V8zm-.884 7.385h.884zm9.384 0h-.884zm-9.384 0H6zm.884 0h7.616zm8.5 0H18z"></svg:path>`,
})
export class MaterialSymbolsLightCheckedBagOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
