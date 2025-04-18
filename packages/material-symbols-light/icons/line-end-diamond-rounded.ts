import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndDiamondRoundedIcon],svg[material-symbols-light-line-end-diamond-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.435 16.204L10.73 12.5H3.577q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h7.154l3.704-3.704q.242-.242.565-.242t.566.242l3.638 3.638q.242.243.242.566t-.242.566l-3.639 3.638q-.242.242-.565.242t-.565-.242"></svg:path>`,
})
export class MaterialSymbolsLightLineEndDiamondRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
