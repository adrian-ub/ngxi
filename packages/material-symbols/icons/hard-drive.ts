import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHardDriveIcon],svg[material-symbols-hard-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16q.625 0 1.063-.425T18.5 14.5q0-.625-.437-1.062T17 13q-.65 0-1.075.438T15.5 14.5q0 .65.425 1.075T17 16M2 9l3.4-3.4q.275-.275.638-.437T6.825 5H17.15q.425 0 .788.163t.637.437L22 9zm2 10q-.85 0-1.425-.575T2 17v-6h20v6q0 .85-.587 1.425T20 19z"></svg:path>`,
})
export class MaterialSymbolsHardDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
