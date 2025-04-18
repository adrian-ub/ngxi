import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBorderInnerIcon],svg[material-symbols-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2h2v2zm0-4v-2h2v2zm0-8V7h2v2zm0-4V3h2v2zm4 16v-2h2v2zM7 5V3h2v2zm8 16v-2h2v2zm4 0v-2h2v2zm0-4v-2h2v2zm0-8V7h2v2zm0-4V3h2v2zm-4 0V3h2v2zm-4 16v-8H3v-2h8V3h2v8h8v2h-8v8z"></svg:path>`,
})
export class MaterialSymbolsBorderInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
