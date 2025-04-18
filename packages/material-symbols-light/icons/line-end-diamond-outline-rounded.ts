import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndDiamondOutlineRoundedIcon],svg[material-symbols-light-line-end-diamond-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15.348L18.348 12L15 8.652L11.652 12zm-.565.856L10.73 12.5H3.577q-.213 0-.357-.143T3.077 12t.143-.357t.357-.143h7.154l3.704-3.704q.242-.242.565-.242t.566.242l3.638 3.638q.242.243.242.566t-.242.566l-3.639 3.638q-.242.242-.565.242t-.565-.242M15 12"></svg:path>`,
})
export class MaterialSymbolsLightLineEndDiamondOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
