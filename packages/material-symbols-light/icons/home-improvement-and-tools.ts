import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeImprovementAndToolsIcon],svg[material-symbols-light-home-improvement-and-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.962 3h8.076L14 5.892V10.5h-4V5.892zM10 11.5h4v3h-4zm0 4h4v3.077l-2 2l-2-2z"></svg:path>`,
})
export class MaterialSymbolsLightHomeImprovementAndToolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
