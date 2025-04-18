import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeImprovementAndToolsOutlineIcon],svg[material-symbols-light-home-improvement-and-tools-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.962 3h8.076L14 5.892v12.685l-2 2l-2-2V5.892zM11 10.5h2V5.6L14 4h-4l1 1.6zm2 1h-2v3h2zm0 6.577V15.5h-2v2.577l1 1zM12 15.5"></svg:path>`,
})
export class MaterialSymbolsLightHomeImprovementAndToolsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
