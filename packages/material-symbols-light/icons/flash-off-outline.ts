import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlashOffOutlineIcon],svg[material-symbols-light-flash-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.385 3h7.288L14 8.789h3.904l-2.56 3.725l-.713-.714l1.377-2.011h-2.985l-.271-.272L14.35 4H9.385v2.554l-1-1zM11 18.846V13H8.385V9.812L2.74 4.167l.713-.713l17.092 17.092l-.713.714l-6.217-6.218zm.998-9.679"></svg:path>`,
})
export class MaterialSymbolsLightFlashOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
