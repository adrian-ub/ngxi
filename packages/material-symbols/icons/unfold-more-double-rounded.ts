import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUnfoldMoreDoubleRoundedIcon],svg[material-symbols-unfold-more-double-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.025 21.15l2.475-2.475q.3-.3.7-.288t.7.313q.275.3.287.7t-.287.7l-3.175 3.175q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213L8.15 20.1q-.275-.275-.288-.687t.288-.713q.275-.275.7-.275t.7.275zm0-5l2.475-2.475q.3-.3.7-.287t.7.312q.275.3.287.7t-.287.7l-3.175 3.175q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213L8.15 15.1q-.275-.275-.288-.687t.288-.713q.275-.275.7-.275t.7.275zm0-8.325L9.55 10.3q-.3.3-.712.288t-.713-.313t-.3-.712t.3-.713l3.2-3.175q.15-.15.325-.213t.375-.062t.375.062t.325.213l3.175 3.2q.3.3.3.7t-.3.7t-.713.3t-.712-.3zm0-5L9.55 5.3q-.3.3-.712.288t-.713-.313t-.3-.712t.3-.713l3.2-3.175q.15-.15.325-.212T12.025.4t.375.063t.325.212l3.175 3.2q.3.3.3.7t-.3.7t-.713.3t-.712-.3z"></svg:path>`,
})
export class MaterialSymbolsUnfoldMoreDoubleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
