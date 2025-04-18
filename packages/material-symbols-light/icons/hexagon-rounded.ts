import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHexagonRoundedIcon],svg[material-symbols-light-hexagon-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.027 20.5q-.435 0-.808-.215q-.373-.214-.59-.593l-3.992-6.884q-.218-.38-.218-.808t.217-.808L6.63 4.308q.217-.38.59-.594t.808-.214h7.946q.435 0 .808.214q.373.215.59.594l3.993 6.884q.217.38.217.808t-.217.808l-3.993 6.884q-.217.38-.59.594t-.808.214z"></svg:path>`,
})
export class MaterialSymbolsLightHexagonRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
