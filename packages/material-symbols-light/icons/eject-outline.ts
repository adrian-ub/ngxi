import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEjectOutlineIcon],svg[material-symbols-light-eject-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.154 18.346v-.923h11.692v.923zm.158-3.692L12 6.154l5.689 8.5zm1.815-.923h7.746L12 7.946z"></svg:path>`,
})
export class MaterialSymbolsLightEjectOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
