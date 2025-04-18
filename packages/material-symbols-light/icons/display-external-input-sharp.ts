import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDisplayExternalInputSharpIcon],svg[material-symbols-light-display-external-input-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.442 21.789l-.713-.714L18.809 19h-4.867v-1h4.887l-2.094-2.1l.707-.688l3.289 3.288zM4 20v-5h1v4h4v1zM4 9V4h5v1H5v4zm15 0V5h-4V4h5v5z"></svg:path>`,
})
export class MaterialSymbolsLightDisplayExternalInputSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
