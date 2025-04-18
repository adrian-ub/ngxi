import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTexIcon],svg[material-icon-theme-tex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M2 8h10v2H2zm4 2h2v10H6zm6 4h6v2h-6zm0 2h2v12h-2z"></svg:path><svg:path fill="#42a5f5" d="M13.5 26H18v2h-4.5zm.5-6h4v2h-4zm8 0h-2l8-12h2z"></svg:path><svg:path fill="#42a5f5" d="M27 20h3L23 8h-3z"></svg:path>`,
})
export class MaterialIconThemeTexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
