import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWristSharpIcon],svg[material-symbols-light-wrist-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.192 20.708L6.485 16H1.692V8h4.293l1.988-2h11.335v1h-5v2.173h7v1h-7v2.154h8v1h-8V15.5h6v1H11.51l1.279 2.533z"></svg:path>`,
})
export class MaterialSymbolsLightWristSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
