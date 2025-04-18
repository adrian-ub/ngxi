import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeImprovementAndToolsOutlineIcon],svg[material-symbols-home-improvement-and-tools-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12l-3 4.2V19l-3 3l-3-3V6.2zm5 8h2V5.6L14 4h-4l1 1.6zm2 2h-2v2h2zm0 6v-2h-2v2l1 1zm-1-2"></svg:path>`,
})
export class MaterialSymbolsHomeImprovementAndToolsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
