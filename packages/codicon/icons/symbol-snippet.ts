import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSymbolSnippetIcon],svg[codicon-symbol-snippet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.5 1l-.5.5V13h1V2h11v11h1V1.5l-.5-.5zM2 15v-1h1v1zm3-1H4v1h1zm1 0h1v1H6zm3 0H8v1h1zm1 0h1v1h-1zm5 1v-1h-1v1zm-3-1h1v1h-1z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconSymbolSnippetIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
