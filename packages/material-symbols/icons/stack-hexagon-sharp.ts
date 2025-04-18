import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackHexagonSharpIcon],svg[material-symbols-stack-hexagon-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 13.5l3.5-2v-4l-3.5-2l-3.5 2v4zM3.7 22.125L1.85 7.2L5 6.85V19h13.3l.125 1.325zM7 17V2h15v15z"></svg:path>`,
})
export class MaterialSymbolsStackHexagonSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
