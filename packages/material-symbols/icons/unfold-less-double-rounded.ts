import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUnfoldLessDoubleRoundedIcon],svg[material-symbols-unfold-less-double-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.025 20.8L9.55 23.25q-.275.275-.687.288t-.713-.288q-.275-.275-.275-.7t.275-.7l3.175-3.175q.15-.15.325-.213t.375-.062t.375.063t.325.212L15.9 21.85q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3zm0-5L9.55 18.25q-.275.275-.687.288t-.713-.288q-.275-.275-.275-.7t.275-.7l3.175-3.175q.15-.15.325-.213t.375-.062t.375.063t.325.212L15.9 16.85q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3zm0-7.65l2.45-2.45q.3-.3.713-.3t.712.3t.3.7t-.3.7l-3.175 3.2q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-3.2-3.2q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3zm0-5L14.475.7q.3-.3.713-.3t.712.3t.3.7t-.3.7l-3.175 3.2q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-3.2-3.2q-.3-.3-.288-.712T8.15.675t.713-.3t.712.3z"></svg:path>`,
})
export class MaterialSymbolsUnfoldLessDoubleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
