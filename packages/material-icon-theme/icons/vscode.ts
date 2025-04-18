import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVscodeIcon],svg[material-icon-theme-vscode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196f3" d="M24.003 2L12 13.303L4.84 8L2 10l6.772 6L2 22l2.84 2L12 18.702L24.003 30L30 27.087V4.913ZM24 9.434v13.132L15.289 16Z"></svg:path>`,
})
export class MaterialIconThemeVscodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
