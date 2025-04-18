import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlexNoWrapIcon],svg[material-symbols-flex-no-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 17V7h6v10zm8 0V7h6v10zm8 0V7h6v10zM3 15h2V9H3zm16 0h2V9h-2z"></svg:path>`,
})
export class MaterialSymbolsFlexNoWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
