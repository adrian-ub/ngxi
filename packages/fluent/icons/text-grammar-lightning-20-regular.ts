import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextGrammarLightning20RegularIcon],svg[fluent-text-grammar-lightning-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11.085a1.5 1.5 0 0 0-1.385.923L12.168 9H2.5a.5.5 0 0 1-.5-.5m8.087 5.5c-.121.341-.11.69 0 1H2.5a.5.5 0 0 1 0-1zm.831-2H2.5a.5.5 0 0 1 0-1h8.835zm.585 3h1.75l-.59 2.36c-.121.482.462.826.826.486l4.872-4.548A.75.75 0 0 0 17.85 12h-1.098l.781-2.342A.5.5 0 0 0 17.06 9h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692"></svg:path>`,
})
export class FluentTextGrammarLightning20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
