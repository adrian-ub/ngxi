import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignJustifySpaceBetweenIcon],svg[material-symbols-align-justify-space-between-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22v-5h-3V7h3V2h2v20zM2 22V2h2v5h3v10H4v5z"></svg:path>`,
})
export class MaterialSymbolsAlignJustifySpaceBetweenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
