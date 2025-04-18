import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularOffRoundedIcon],svg[material-symbols-signal-cellular-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.425 22q-.675 0-.937-.612T3.7 20.3l6.9-6.9l-7.5-7.475q-.3-.275-.287-.687t.287-.713q.3-.3.713-.3t.712.3L21.5 21.5q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-.9-.9zM22 4.425v12.35q0 .45-.3.738t-.7.287q-.2 0-.375-.075T20.3 17.5l-6.2-6.2q-.15-.15-.212-.325t-.063-.375t.063-.375t.212-.325l6.2-6.2q.475-.475 1.088-.212t.612.937"></svg:path>`,
})
export class MaterialSymbolsSignalCellularOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
