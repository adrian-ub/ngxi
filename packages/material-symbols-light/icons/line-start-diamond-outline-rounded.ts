import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineStartDiamondOutlineRoundedIcon],svg[material-symbols-light-line-start-diamond-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15.348L12.348 12L9 8.652L5.652 12zm-.565.856l-3.639-3.639q-.242-.242-.242-.565t.242-.565l3.638-3.639q.243-.242.566-.242t.566.242l3.703 3.704h7.154q.214 0 .357.143t.143.357t-.143.357t-.357.143h-7.154l-3.703 3.704q-.243.242-.566.242t-.565-.242M9 12"></svg:path>`,
})
export class MaterialSymbolsLightLineStartDiamondOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
