import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalBarRoundedIcon],svg[material-symbols-local-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v-5L3.45 5.5q-.2-.2-.325-.462T3 4.5q0-.65.45-1.075T4.55 3h14.9q.65 0 1.1.425T21 4.5q0 .275-.125.538t-.325.462L13 14v5h4q.425 0 .713.288T18 20t-.288.713T17 21H7q-.425 0-.712-.288T6 20t.288-.712T7 19zM7.45 7h9.1l1.8-2H5.65z"></svg:path>`,
})
export class MaterialSymbolsLocalBarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
