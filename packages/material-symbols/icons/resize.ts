import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsResizeIcon],svg[material-symbols-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9V5h-4V3h6v6zM3 21v-6h2v4h4v2zm0-8v-2h2v2zm0-4V7h2v2zm0-4V3h2v2zm4 0V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm4 0v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsResizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
