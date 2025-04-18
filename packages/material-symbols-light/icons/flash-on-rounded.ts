import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlashOnRoundedIcon],svg[material-symbols-light-flash-on-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.429 17.479q-.187-.056-.308-.214q-.121-.16-.121-.376V13h-1q-.671 0-1.143-.472t-.472-1.144V4.617q0-.672.472-1.144T10 3h3.83q.686 0 1.125.5q.44.5.259 1.116L14 8.789h1.606q.727 0 1.068.636q.342.637-.068 1.252l-4.5 6.56q-.131.186-.31.242q-.18.056-.367 0"></svg:path>`,
})
export class MaterialSymbolsLightFlashOnRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
