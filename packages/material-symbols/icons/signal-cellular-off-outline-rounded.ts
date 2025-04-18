import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularOffOutlineRoundedIcon],svg[material-symbols-signal-cellular-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.825 20h10.35L12 14.825zm-2.4 2q-.675 0-.937-.612T3.7 20.3l6.9-6.9l-7.5-7.475q-.3-.275-.287-.687t.287-.713q.3-.3.713-.3t.712.3L21.5 21.5q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-.9-.9zM22 4.425v12.35q0 .5-.312.75t-.688.25t-.687-.262T20 16.75V6.825L15.525 11.3q-.275.275-.687.275t-.713-.275q-.3-.3-.3-.712t.3-.713L20.3 3.7q.475-.475 1.088-.213t.612.938M14.6 17.4"></svg:path>`,
})
export class MaterialSymbolsSignalCellularOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
