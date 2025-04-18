import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlashOffIcon],svg[material-symbols-light-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.385 3h7.288L14 8.789h3.904l-2.56 3.725l-6.96-6.96zM11 18.846V13H8.385V9.812L2.74 4.167l.713-.713l17.092 17.092l-.713.714l-6.217-6.218z"></svg:path>`,
})
export class MaterialSymbolsLightFlashOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
