import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPrintDisabledSharpIcon],svg[material-symbols-print-disabled-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L18 20.85V21H6v-4H2V8h3.15L1.375 4.225L2.8 2.8l18.4 18.4zM8 19h8v-.15L12.15 15H8zm11.85-2l-9-9H22v9zM18 7H9.85l-4-4H18zm0 5.5q.425 0 .713-.288T19 11.5t-.288-.712T18 10.5t-.712.288T17 11.5t.288.713t.712.287"></svg:path>`,
})
export class MaterialSymbolsPrintDisabledSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
