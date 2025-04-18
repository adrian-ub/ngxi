import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStackHexagonSharpIcon],svg[material-symbols-light-stack-hexagon-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.27 13.558l3.346-1.904V7.808l-3.347-1.904l-3.346 1.904v3.846zm-9.685 7.47L2.927 8.067l2.612-.254v10.65h12.8l.086.825zm2.954-4.566V3H21v13.462z"></svg:path>`,
})
export class MaterialSymbolsLightStackHexagonSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
