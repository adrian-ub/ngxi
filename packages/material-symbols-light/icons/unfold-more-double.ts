import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUnfoldMoreDoubleIcon],svg[material-symbols-light-unfold-more-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.025 22.571l-3.883-3.863L8.85 18l3.175 3.15l3.156-3.156l.708.714zm0-5l-3.883-3.863L8.85 13l3.175 3.15l3.156-3.156l.708.714zM8.85 11l-.713-.733l3.869-3.869l3.883 3.889l-.714.713l-3.17-3.156zm0-5l-.713-.733l3.869-3.869l3.883 3.889l-.714.713l-3.17-3.156z"></svg:path>`,
})
export class MaterialSymbolsLightUnfoldMoreDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
