import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTuneIcon],svg[material-symbols-light-tune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20.5v-5h1v2h8v1h-8v2zm-8-2v-1h5v1zm4-4v-2h-4v-1h4v-2h1v5zm4-2v-1h9v1zm4-4v-5h1v2h4v1h-4v2zm-12-2v-1h9v1z"></svg:path>`,
})
export class MaterialSymbolsLightTuneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
