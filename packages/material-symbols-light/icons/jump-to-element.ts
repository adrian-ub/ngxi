import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightJumpToElementIcon],svg[material-symbols-light-jump-to-element-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.423 12.577v-3h1v2h2v1zm6.577 0v-1h2v-2h1v3zM11.423 6V3h3v1h-2v2zM20 6V4h-2V3h3v3zM3.708 21L3 20.292l6.715-6.715H4v-1h7.423V20h-1v-5.715z"></svg:path>`,
})
export class MaterialSymbolsLightJumpToElementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
