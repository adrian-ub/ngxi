import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFluorescentIcon],svg[material-symbols-light-fluorescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14.089V9.933h12v4.155zm5.5-9.243V2.462h1v2.384zm6.816 2.608l-.708-.708L19.1 5.254l.708.708zM11.5 21.462v-2.385h1v2.385zm7.6-2.693l-1.492-1.492l.708-.708l1.492 1.493zM5.684 7.454L4.193 5.96l.708-.707l1.492 1.492zM4.9 18.769l-.708-.707l1.493-1.493l.707.708z"></svg:path>`,
})
export class MaterialSymbolsLightFluorescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
