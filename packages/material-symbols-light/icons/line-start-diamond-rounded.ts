import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineStartDiamondRoundedIcon],svg[material-symbols-light-line-start-diamond-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.435 16.204l-3.639-3.639q-.242-.242-.242-.565t.242-.565l3.638-3.639q.243-.242.566-.242t.566.242l3.703 3.704h7.154q.213 0 .356.144t.144.357t-.144.356t-.356.143h-7.154l-3.703 3.704q-.243.242-.566.242t-.565-.242"></svg:path>`,
})
export class MaterialSymbolsLightLineStartDiamondRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
