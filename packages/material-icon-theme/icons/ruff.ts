import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRuffIcon],svg[material-icon-theme-ruff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#43a047" d="M26 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4v24h10v-8h2v8h12V18h-6v-2Zm-8-2h-6v-2h6Z"></svg:path>`,
})
export class MaterialIconThemeRuffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
