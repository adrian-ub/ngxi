import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineStartArrowOutlineIcon],svg[material-symbols-light-line-start-arrow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.808 16.827L4.212 12l7.596-4.827V11.5h9.115v1h-9.115zm-1-1.823V8.996L6.09 12zm0-3.004"></svg:path>`,
})
export class MaterialSymbolsLightLineStartArrowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
