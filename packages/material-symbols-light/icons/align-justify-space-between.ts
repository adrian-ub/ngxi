import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignJustifySpaceBetweenIcon],svg[material-symbols-light-align-justify-space-between-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21v-4.5h-2v-9h2V3h1v18zM3 21V3h1v4.5h2v9H4V21z"></svg:path>`,
})
export class MaterialSymbolsLightAlignJustifySpaceBetweenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
